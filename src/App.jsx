import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/shop/Shop'
import { Cart } from './Pages/cart/Cart'
import {ShopContextProvider} from '../src/Context/shop-context'


function App() {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
    </ShopContextProvider>
    </div>
  )
}

export default App