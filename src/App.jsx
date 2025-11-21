import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import CartPage from "./pages/CartPage"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, 
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "products", 
          element: <Products />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "cartpage",
          element: <CartPage/>

        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App