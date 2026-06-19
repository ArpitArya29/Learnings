import './App.css'
import AnotherCard from './components/AnotherCard.tsx'
import Card from './components/Card.tsx'
import ChaiList from './components/ChaiList.tsx'
import OrderForm from './components/OrderForm.tsx'

import {useFetch} from './hooks/useFetch.ts'

import type { Chai } from './types.ts' // imports the type

const menu: Chai[] = [
  {id: 1, name: "Chai 1", price: 20},
  {id: 2, name: "Chai 2", price: 30},
  {id: 3, name: "Chai 3", price: 40},
  {id: 4, name: "Chai 4", price: 50}
]




function App() {
  const dataFromFetch = useFetch<Chai[]>('https://api.sampleapis.com/coffee/hot')
  return (
    <>
      <div>
        <h1>Vite + React With Typescript</h1>

        <Card 
          name={"Mobile 1"} 
          price={25000} 
          isSpecial={true}
        />

        <Card 
          name={"Hearphone 2"} 
          price={2000} 
          isSpecial={false}
        />

        <Card 
          name={"Charger 3"} 
          price={200} 
        />

      </div>

      <div>
        <h2>Using the ChaiList</h2>
        <ChaiList items={menu}/>
      </div>

      <div>
        <OrderForm
          onSubmit={(orderItem) => {
            console.log("Order Placed", orderItem.name, orderItem.cups);
          }}
        />
      </div>

      <div>
        <AnotherCard
          title='Card with Children'
          footer={<button>Order Now</button>}
        />
      </div>

      <div>
          <h2>Using the useFetch Hook</h2>
          {dataFromFetch.loading && <p>Loading...</p>}
          {dataFromFetch.error && <p>Error: {dataFromFetch.error}</p>}
          {dataFromFetch.data && (
            <ul>
              {dataFromFetch.data?.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
      </div>
    </>
  )
}

export default App
