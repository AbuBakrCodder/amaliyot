import useFetch from "../hooks/useFetch"
import ProductList from "../components/ProductList";
import { FaCheck } from "react-icons/fa";

function Home() {
    const { data, error, loading } = useFetch("https://json-api.uz/api/project/products-e/products")

    const filteredData = data ? data.filter(item => item.id <= 3) : [];
    console.log(filteredData);

    return (
        <div>
            {error && !loading && (
                <h2 className="flex items-center justify-center fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/45 text-center font-black text-2xl sm:text-4xl text-red-500/60 pt-28">
                    {error}
                </h2>
            )}
            {loading && (
                <h2 className="flex items-center justify-center fixed z-50 top-0 bottom-0 left-0 right-0 text-center font-black text-2xl sm:text-4xl text-white bg-black/45 pt-28">
                    Loading ...
                </h2>
            )}

            <div className="flex items-center justify-center flex-col gap-5 px-4">
                <h1 className="text-2xl sm:text-4xl font-bold">Strength Store</h1>
                <img src="./logo.jpg" width={150} alt="" className="sm:w-[200px]" />
                <p className="text-lg sm:text-xl font-semibold w-full sm:w-80 text-center">
                    Welcome to the Future of Electronics
                </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-5 py-5 px-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-center">Why Shop With Us?</h2>
                <ul className="w-full sm:w-[450px] flex flex-col justify-center gap-3 bg-[#fff200] p-4 rounded-2xl select-none">
                    <li className="hover:scale-105 transition-all">
                        <p className="text-base sm:text-xl bg-white p-3 rounded-2xl">
                            🚀 Fast Delivery – 24–48 hour shipping
                        </p>
                    </li>
                    <li className="hover:scale-105 transition-all">
                        <p className="text-base sm:text-xl bg-white p-3 rounded-2xl flex gap-3 items-center">
                            <FaCheck/> 100% Original – Trusted brands only
                        </p>
                    </li>
                    <li className="hover:scale-105 transition-all">
                        <p className="text-base sm:text-xl bg-white p-3 rounded-2xl">
                            💳 Secure Payments
                        </p>
                    </li>
                    <li className="hover:scale-105 transition-all">
                        <p className="text-base sm:text-xl bg-white p-3 rounded-2xl">
                            📞 24/7 Customer Support
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5 px-4 pb-5">
                {filteredData && !loading && filteredData.map((p) => {
                    return <ProductList key={p.id} p={p} />
                })}
            </div>
        </div>
    )
}

export default Home
