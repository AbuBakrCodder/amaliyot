import React, { useState } from "react"
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { useGlobalContext } from "../hooks/useGlobalContext"

function Navbar() {
  const { totalPrice, totalAmount } = useGlobalContext()
  const [open, setOpen] = useState(false)

  return (
    <header className="flex justify-between items-center px-4 md:px-10 py-2 container mx-auto sticky top-0 z-50 bg-white">
      <Link to={"/"} className="flex gap-1 items-center">
        <img src="./logo.jpg" alt="logo" className="w-20 md:w-[100px]" />
        <span className="text-xl font-bold">Store</span>
      </Link>

      <nav className="hidden md:flex gap-4 items-center">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        <NavLink to="/products" className="hover:underline">Products</NavLink>
        <NavLink to="/contact" className="hover:underline">Contact</NavLink>
        <NavLink to={"/cartpage"} className="relative">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-3 -right-3 bg-amber-300/70 rounded-full px-2 text-sm">
            {totalAmount}
          </span>
        </NavLink>
      </nav>

      <div className="flex items-center md:hidden">
        <Link to="/cartpage" className="relative mr-2">
          <FaShoppingCart className="text-xl" />
          <span className="absolute -top-3 -right-3 bg-amber-300/70 rounded-full px-2 text-sm">
            {totalAmount}
          </span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="p-2 text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`md:hidden absolute z-50 right-4 top-[90%] left-0 mt-2 max-w-xs bg-white shadow-lg rounded-lg p-4 transition-transform duration-150 origin-top-right transform ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3">
          <NavLink to="/" onClick={() => setOpen(false)} className="py-2 hover:underline">
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)} className="py-2 hover:underline">
            Products
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="py-2 hover:underline">
            Contact
          </NavLink>
          <NavLink
            to="/cartpage"
            onClick={() => setOpen(false)}
            className="py-2 flex items-center gap-2"
          >
            <FaShoppingCart />
            Cart
            <span className="ml-auto bg-amber-300/70 rounded-full px-2 text-sm">
              {totalAmount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
