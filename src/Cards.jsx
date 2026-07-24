import Card from "./Card"
import Dessertmenu from "./data"

const Cards = ({ orderedMenu, setOrderedMenu }) => {
    return (
        <div className="w-7/10 h-full flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-black">Desserts</h1>
            </div>
            <div className="grid grid-cols-4 gap-6">
                {Dessertmenu.map((dessert) => {
                    return <Card data={dessert}  orderedMenu={orderedMenu} setOrderedMenu={setOrderedMenu} />
                })}
            </div>
        </div>
    )
}

export default Cards