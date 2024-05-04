import { createBrowserRouter,RouterProvider } from "react-router-dom"

// pages
import {
About,HomeLayout,Error,Checkout,Cart,
Orders,Products,Login,Landing,SingleRroduct,
Register,} from "./pages"   

// components
import {ErrorElement} from "./components"

// loaders
import {loader as Landingloader} from "./pages/Landing"
import {loader as SingleProductLoader} from "./pages/SingleRroduct"


function App() {
  const routers =createBrowserRouter([
    {
      path:"/",
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          errorElement:<ErrorElement/>,
          loader:Landingloader,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/products",
          element:<Products/>,
        },
        {
          path:"/product/:id",
          element:<SingleRroduct/>,
          loader:SingleProductLoader,
        },
        {
          path:"/cart",
          element:<Cart/>,
        },
        {
          path:"/checkout",
          element:<Checkout/>,
        },
        {
          path:"/orders",
          element:<Orders/>,
        },
      ],
    },
    {
      path:"/login",
      element:<Login/>,
      errorElement:<Error/>,
    },
    {
      path:"register",
      element:<Register/>,
      errorElement:<Error/>,
    },
  ])
  return <RouterProvider router={routers}/>
}

export default App
