import { useState } from 'react'

type counter = {
  price: number
}

const Counter = ({price}: counter) => {
    const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Total Cups: {count}</p>
      <p>You have to pay: {count * price}</p>
      <button
        onClick={() => setCount((p) => p + 1)}
      >
        Add More item +
      </button>
    </div>
  )
}

export default Counter
