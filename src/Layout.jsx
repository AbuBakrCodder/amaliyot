import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer"

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow container mx-auto px-20 py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout