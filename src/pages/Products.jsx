import ProductList from "../components/ProductList"
import useFetch from "../hooks/useFetch"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Products() {
    const { data, error, loading } = useFetch("https://json-api.uz/api/project/products-e/products")
    const { totalPrice, totalAmount, dispatch, state } = useGlobalContext()
    

    return (
        <div className="flex flex-col">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center sticky top-25 py-3 md:py-5 z-10 bg-white px-5 md:px-10 mb-5 md:mb-10 gap-3">
                <h2 className="text-2xl md:text-3xl font-bold">Product List</h2>
                <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full md:w-auto">
                    <p className="text-sm md:text-base">Total Price: {totalPrice}$</p>
                    <button onClick={() => { dispatch({ type: "CLEAR_CARTS" }) }} className='w-20 flex gap-1 items-center justify-center border px-2 rounded hover:bg-amber-400 transition-all cursor-pointer hover:text-white text-sm md:text-base'>Clear</button>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-5 md:gap-10 p-3 md:p-5">
                {error && !loading && <h2 className="text-center font-black text-2xl md:text-4xl text-red-500/60 pt-20 md:pt-28">{error}</h2>}
                {loading && <h2 className="text-center font-black text-2xl md:text-4xl text-black/60 pt-20 md:pt-28">Loading ...</h2>}
                {data && !loading && data.map((p) => {
                    return <ProductList key={p.id} p={p} />
                })}
            </div>
        </div>
    )
}

export default Products
