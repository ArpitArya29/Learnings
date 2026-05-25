import express from "express";
import Redis from "ioredis";

const app = express();
app.use(express.json());

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

const LEADERBOARD_NAME = "LeaderBoard";

app.post("/post/:id/views", async (req, res) => {
    const { id } = req.params;
    const key = `post:${id}:views`;
    try {
        const views = await redis.incr(key);
        res.json({ postId: id, views });
    } catch (error) {
        console.error("Error incrementing views:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/leaderboard/score", async(req, res) => {
    const { userId, score } = req.body;
    
    try{
        await redis.zincrby(LEADERBOARD_NAME, score, userId);
        res.json({ message: "Score updated successfully" });
    } catch (error) {
        console.error("Error updating score:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/leaderboard/top/:n", async(req, res) => {
    const { n } = req.params;
    try {
        const topUsers = await redis.zrevrange(LEADERBOARD_NAME, 0, n - 1, "WITHSCORES");

        let formattedTopUsers = [];
        for (let i = 0; i < topUsers.length; i += 2) {
            formattedTopUsers.push(
                { 
                    rank: i / 2 + 1,
                    userId: topUsers[i], 
                    score: parseInt(topUsers[i + 1]) 
                }
            );
        }
        res.json(formattedTopUsers);
    } catch (error) {
        console.error("Error fetching top users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/leaderboard/:userId/rank", async(req, res) => {
    const { userId } = req.params;
    
    try {
        const rank = await redis.zrevrank(LEADERBOARD_NAME, userId);
        if (rank === null) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.json({ userId, rank: rank + 1 });
        }
    } catch (error) {
        console.error("Error fetching user rank:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/leaderboard/:userId/reset", async(req, res) => {
    const { userId } = req.params; 
    try {
        await redis.zrem(LEADERBOARD_NAME, userId);
        res.json({ message: "User score reset successfully" });
    } catch (error) {
        console.error("Error resetting user score:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }       
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
