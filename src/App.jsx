import { useState } from "react"
import Cards from "./Cards"
import OrderCard from "./OrderCard"

const App = () => {
  const items = [
    {
      name: 'PanCakes',
      quantity: 3,
      price: 300,
    },
    {
      name: 'PanCakes',
      quantity: 2,
      price: 140,
    },
    {
      name: 'PanCakes',
      quantity: 3,
      price: 500,
    },
  ]
  const [orderedMenu, setOrderedMenu] = useState(items)
  const [count, setCount] = useState(1)
  return (
    <main className="h-screen bg-orange-50 flex p-4 gap-6">
      <Cards orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} setCount={setCount} count={count} />
      <OrderCard orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} count={count} setCount={setCount} />
    </main>
  )
}

export default App