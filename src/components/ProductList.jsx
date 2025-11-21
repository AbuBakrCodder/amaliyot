import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function ProductList({ p }) {
    return (
        <div className='shadow-md rounded-2xl p-5'>
            <img className='h-48 mb-5' src={p.image} alt={p.image} width={180} />
            <h2 className='font-bold mb-2'>{p.title}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex flex-col'><span>Price: {p.price}
                <br />    $<span>Stock: {p.stock}</span></span>
                </p>
                <button className='flex gap-1 items-center border px-2 rounded hover:bg-amber-400 transition-all cursor-pointer hover:text-white'>Add <FaShoppingCart /></button>
            </div>
        </div>
    )
}

export default ProductList
