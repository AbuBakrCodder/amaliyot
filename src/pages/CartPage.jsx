import { FaTrash } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext"

function CartPage() {
    const { cart, dispatch } = useGlobalContext()

    return (
        <div className="container mx-auto px-4 sm:px-10 py-5 flex flex-col gap-10">
            <div>
                {
                    !cart.length ? (
                        <h2 className="font-bold flex flex-col items-center gap-5 text-2xl text-center">
                            <span>
                                Please add product
                            </span>
                            <button className="border px-4 py-2 rounded-2xl cursor-pointer active:scale-75">
                                <NavLink to={"/products"}>Go to shopping</NavLink>
                            </button>
                        </h2>
                    ) : cart.length === 1 ? (
                        <h2 className="font-bold text-2xl text-center">Your product</h2>
                    ) : (
                        <h2 className="font-bold text-2xl text-center">Your products</h2>
                    )
                }
            </div>
            <div className="flex flex-col gap-5">
                {cart.map((i) => {
                    return (
                        <div className="border-l-4 border-amber-400 flex flex-col md:flex-row justify-between items-center p-5 rounded-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-5">
                                <img src={i.image} alt={i.image} className="w-24 sm:w-32" />
                                <h3 className="flex flex-col gap-3">
                                    <span className="font-bold text-xl sm:text-2xl">
                                        {i.title}
                                    </span>
                                    <span className="text-sm font-bold italic">
                                        Stock: {i.stock}
                                    </span>
                                </h3>
                            </div>
                            <div className='flex gap-3 items-center mt-3 sm:mt-0'>
                                <button className='border w-8 rounded' onClick={() => { if (i.amount === 1) { dispatch({ type: "DELETE", payload: i.id }) } else { dispatch({ type: "DECREACE", payload: i.id }) } }}>-</button>
                                <span>{i.amount}</span>
                                <button onClick={() => { dispatch({ type: "INCREACE", payload: i.id }) }} className='border w-8 rounded'>+</button>
                                <button onClick={() => { dispatch({ type: "DELETE", payload: i.id }) }} className="text-2xl cursor-pointer hover:text-red-500 active:scale-75"><FaTrash /></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartPage
