import ProductList from "../components/ProductList"
import useFetch from "../hooks/useFetch"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Products() {
    const { data, error, loading } = useFetch("https://json-api.uz/api/project/products-e/products")
    const { totalPrice, totalAmount, dispatch, state } = useGlobalContext()
    

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center sticky top-25 py-5 z-10 bg-white px-10 mb-10">
                <h2 className="text-3xl font-bold ">Product List</h2>
                <div className="flex gap-5">
                    <p>Total Price: {totalPrice}$</p>
                    <button onClick={() => { dispatch({ type: "CLEAR_CARTS" }) }} className='flex gap-1 items-center border px-2 rounded hover:bg-amber-400 transition-all cursor-pointer hover:text-white'>Clear</button>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-10 p-5">
                {error && !loading && <h2 className="text-center font-black text-4xl text-red-500/60 pt-28">{error}</h2>}
                {loading && <h2 className="text-center font-black text-4xl text-black/60 pt-28">Loading ...</h2>}
                {data && !loading && data.map((p) => {
                    return <ProductList key={p.id} p={p} />
                })}
            </div>
        </div>
    )
}

export default Products
