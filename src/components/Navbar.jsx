import { FaShoppingCart } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Navbar() {
  const {totalPrice, totalAmount}= useGlobalContext()

  return (
    <header className="flex justify-between items-center px-10 py-1 container mx-auto sticky top-0 z-10 bg-white">
        <Link to={"/"} className="flex gap-1 items-center">
          <img src="./logo.jpg" alt="" className="w-[100px]"/>
          <span className="text-xl font-bold">Store</span>
        </Link>
        <nav className="flex gap-4 items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to={"/cartpage"} className="relative">
            <FaShoppingCart className="text-xl"/>
            <span className="absolute -top-3 -right-3 bg-amber-300/70 rounded-full px-2">{totalAmount}</span>
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
