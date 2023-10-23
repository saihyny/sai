import React,{useState} from 'react';
import './App.css';
import Description from './components/Description';
import Input from './components/Input';
import DesContextProvide from './components/Contexts/DescriptionContextProvider';
import HeaderBill from './components/Cart/HeaderBillButton';
import Cart from './components/Cart/Cart';
import CartContexProvider from './components/Contexts/CartContexProvider';

function App() {
const [showBill,setShowbill] = useState(false)

const showBillHandler = ()=>{
    setShowbill(true)
}
const closeBillHandler = ()=>{
   setShowbill(false)
}
  return (
    <CartContexProvider>
    <DesContextProvide>
      
     {showBill && <Cart close={closeBillHandler}/>}
    <div className="app">
    <HeaderBill  show={showBillHandler}/>
      <Input ></Input>
      <div className='app'>
        
      <Description></Description>
    
      </div>
    </div>
    
    </DesContextProvide>
    </CartContexProvider>
  );
}

export default App;
