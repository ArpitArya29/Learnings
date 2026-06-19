import type { Chai } from '../types' // this ensures that we import type from the folder
import Card from './Card'

interface ChaiListProps {
    items: Chai[]
}

const ChaiList = ({items}: ChaiListProps) => {
  return (
    <div>
      {
        items.map( (chai) => (
            <Card
                key={chai.id}
                name={chai.name}
                price={chai.price}
                isSpecial={chai.price > 30}
            />
        ))
      }
    </div>
  )
}

export default ChaiList
