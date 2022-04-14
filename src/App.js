import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Order from './Components/Order/Order';
import About from './Components/About/About';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Shipping from './Components/Shipping/Shipping';

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
        <Route path='/inventory' element={
          <RequireAuth >
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/shipping' element={
          <RequireAuth>
            <Shipping></Shipping>
          </RequireAuth>
        } ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      
      

    </div>
  );
}

export default App;
