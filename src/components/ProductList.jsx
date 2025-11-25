import { FaShoppingCart } from 'react-icons/fa'
import { useGlobalContext } from '../hooks/useGlobalContext'

function ProductList({ p }) {
const { dispatch, cart, totalAmount } = useGlobalContext()

    let itemInCart = cart.find(i => i.id === p.id)

    return (
        <div className='shadow-md rounded-2xl p-5'>
            <img className='h-48 mb-5' src={p.image} alt={p.image} width={180} />
            <h2 className='font-bold mb-2'>{p.title}</h2>
            <div className='flex justify-between items-center'>
                <p className='flex flex-col'>
                    <span>
                    Price: {p.price}$<br />
                        <span className='text-[10px]'>Stock: {p.stock}</span>
                    </span>
                </p>

                {!itemInCart && (
                    <button
                        className='flex gap-1 items-center border px-2 rounded hover:bg-amber-400 transition-all cursor-pointer hover:text-white'
                        onClick={() => dispatch({ type: "ADD_TO_CART", payload: { ...p, amount: 1 } })}
                    >
                        Add <FaShoppingCart />
                    </button>
                )}

                {itemInCart && (
                    <div className='flex gap-3 items-center'>
                        <button className='border w-8 rounded' onClick={() => { if (itemInCart.amount === 1) { dispatch({ type: "DELETE", payload: itemInCart.id }) } else { dispatch({ type: "DECREACE", payload: itemInCart.id }) } }}>-</button>
                        <span>{itemInCart.amount}</span>
                        <button onClick={() => { dispatch({ type: "INCREACE", payload: itemInCart.id }) }} className='border w-8 rounded'>+</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList
