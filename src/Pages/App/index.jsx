import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import Signin from "../Signin"
import NavBar from "../../Components/NavBar"
import "./App.css"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <Signin /> },
    { path: "*", element: <NotFound /> },
    
    
  ])
  return routes
}
const  App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
     
    
  )
}

export default App
