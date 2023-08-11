import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home';
import PagenotFound from './Components/PagenotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Cart from './Components/Cart';
import Doremon from './Components/Doremon';
import TodaysDeals from './Components/TodaysDeals'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar></Navbar>

      <Routes>
       <Route path='/'  element={<Home></Home>}  ></Route>
        <Route path='/about' element={<About></About>}  ></Route>
        <Route path='*' element={<PagenotFound/>}  ></Route>
        <Route path='/login' element={<Login/>}  ></Route>
        <Route path='/cart' element={<Cart/>}  ></Route>
        <Route path='/cart/login' element={<Login/>}  ></Route>
        <Route path='/todaydeals/doremon' element={<Doremon/>}  ></Route>
        <Route path='/todaydeals' element={<TodaysDeals/>}  ></Route>
      </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;



