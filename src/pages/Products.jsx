import ProductList from "../components/ProductList"
import useFetch from "../hooks/useFetch"

function Products() {
    const { data, error, loading } = useFetch("https://json-api.uz/api/project/products-e/products")
    

    return (
        <div className="flex justify-center flex-wrap gap-10 p-5">
            {error && !loading && <h2 className="text-center font-black text-4xl text-red-500/60 pt-28">{error}</h2>}
            {loading && <h2 className="text-center font-black text-4xl text-black/60 pt-28">Loading ...</h2>}
            <div>
                <h2>Product List</h2>
            </div>
            {data && !loading && data.map((p)=>{
                return <ProductList key={p.id} p={p}/>
            })}
        </div>
    )
}

export default Products
