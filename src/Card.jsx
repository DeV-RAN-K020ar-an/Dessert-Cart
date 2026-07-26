import { useState } from 'react'
import { BsCartPlus } from "react-icons/bs";
// import { PiMinusCircle, PiPlusCircle } from 'react-icons/pi';
const Card = ({ data, orderedMenu, setOrderedMenu, setCount, count }) => {
    const { image, type, dessert, price } = data
    const handleAddToCart = () => {
        setCount(count + 1)
        const obj = {
            name: dessert,
            quantity: count,
            price: price,
        }
        setOrderedMenu([...orderedMenu, obj])

    }
    return (
        <div className='h-75 w-full flex flex-col'>
            <div className='h-8/10 w-full flex flex-col items-center'>
                < img src={image} className='h-full w-full rounded-xl object-cover' />
                <button className='bg-white rounded-4xl border border-gray-500/30 w-38 flex items-center justify-center gap-2 h-11 relative z-10 bottom-5 font-medium hover:cursor-pointer outline-none' onClick={handleAddToCart}>
                    <BsCartPlus className='text-orange-800 text-[23px]' />
                    <h1 className='text-orange-800'>Add to Cart</h1>
                </button>
            </div >
            <div className='h-2/10'>
                <p className='text-xs text-slate-400'>{type}</p>
                <h4 className='text-sm font-bold'>{dessert}</h4>
                <p className='text-xs text-red-600 font-medium'>{price} AFN</p>
            </div>
        </div >
    )
}

export default Card