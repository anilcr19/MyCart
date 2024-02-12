import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cart from './components/Cart';
import { CartProvider } from 'react-use-cart';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Offers  from './pages/Offers';
import Collections from './pages/Collections';

function App() {
  return (
    <div>
      <CartProvider>
        <Router basename='/'>
          <Nav/>
          <Routes>
             <Route exact path="/" element={<Home/>}/>
             <Route exact path="/cart" element={<Cart/>}/>
             <Route exact path="/offers" element={<Offers/>}/>
             <Route exact path="/collections" element={<Collections/>}/> 
          </Routes>
        </Router>
      </CartProvider>
      
    </div>
  )
}

export default App

