import { BiXCircle } from "react-icons/bi"
const OrderCard = ({ orderedMenu, setOrderedMenu, count, setCount }) => {
    const handleDelete = (i) => {
        let filter = orderedMenu.filter((_, index) => {
            return i != index
        })
        setCount(1)
        setOrderedMenu(filter)
    }
    let current = 0
    const total = orderedMenu.forEach((currentValue) => {
        let total = currentValue.price * currentValue.quantity
        return current = current + total
    })
    return (
        <div className="h-7/10 w-115 rounded-xl bg-white border border-gray-950/10 p-4 flex flex-col justify-between overflow-auto">
            <div className="h-1/10 w-full">
                <h1 className="text-xl font-bold text-orange-700">Your Cart ( {orderedMenu.length} )</h1>
            </div>
            <div className="flex flex-col p-3 h-5/10 overflow-auto">
                {orderedMenu.map((menu, i) => {
                    return (
                        <div className="flex justify-between items-center border-b border-slate-300 py-4">
                            <div className="flex flex-col gap-1 justify-between">
                                <div>
                                    <h1 className="font-extrabold w-full">{menu.name}</h1>
                                </div>
                                <div className="flex gap-2 items-center justify-start">
                                    <p className="font-bold text-sm text-orange-800">{menu.quantity}x</p>
                                    <p className="font-light">{menu.price} AFN =</p>
                                    <p className="font-black text-sm">{menu.quantity * menu.price} AFN</p>
                                </div>
                            </div>
                            <div>
                                <BiXCircle onClick={() => handleDelete(i)} className="hover:text-orange-800 hover:scale-120 text-lg transition-all hover:cursor-pointer" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-between items-center pt-6 h-1/10">
                <h4 className="font-light">Order Total</h4>
                <h1 className="text-xl font-bold">{current} AFN</h1>
            </div>
            <div>
                <button className="p-2 rounded-4xl text-white bg-orange-800 w-full hover:cursor-pointer">Confirm Order</button>
            </div>
        </div>
    )
}

export default OrderCard