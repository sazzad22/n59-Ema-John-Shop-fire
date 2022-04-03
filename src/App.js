import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';

function App() {
  //at module 53 we add react routing in ema-john project
  return (
    <div >

      {/* jei element er location default theke change hobe sheta amra <Route e moddhe rakhbo, Jetar location change hobe na sheta  <Rout er baire rakhbo */}

      <Header ></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
