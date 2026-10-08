import { useState } from "react"
import Cards from "./Cards"
import OrderCard from "./OrderCard"

const App = () => {
  const [orderedMenu, setOrderedMenu] = useState([])
  const [count, setCount] = useState(1)
  return (
    <main className="h-screen bg-orange-50 flex justify-between p-4 gap-6">
      <Cards orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} setCount={setCount} count={count} />
      <OrderCard orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} count={count} setCount={setCount} />
    </main>
  )
}

export default App