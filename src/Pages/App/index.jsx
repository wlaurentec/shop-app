import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import Signin from "../Signin"
import "./App.css"

function App() {

  return (
    <div className="bg-red-100">
       <Home />
       <MyAccount />
       <MyOrder />
       <MyOrders />
       <NotFound />
       <Signin />
     
    </div>
    
  )
}

export default App
