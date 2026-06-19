import Counter from "./Counter";

interface CardProp {
    name: string;
    price: number;
    isSpecial?: boolean
}

// specifies the interface of the prop - property
const Card = ({ name, price, isSpecial = false }: CardProp) => {
  return (
    <div 
        style={{ border: "2px solid white", borderRadius: "10px", margin: "15px", padding: "10px" }}
    >
      <article>
        <h2>
            {name} {isSpecial && <span>⭐</span>}
        </h2>
        <p>{price}</p>
      </article>

      <Counter price={price}/>
    </div>
  )
}

export default Card
