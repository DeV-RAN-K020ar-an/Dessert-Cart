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
  return (
    <main className="h-screen bg-orange-50 flex p-4 gap-6">
      <Cards orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} />
      <OrderCard orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} />
    </main>
  )
}

export default App