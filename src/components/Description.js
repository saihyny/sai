import "./Description.css";
import React, { useContext } from "react";
import DescriptionContext from "./Contexts/DescripionContext";
import Button from "./Contexts/Button/Button/Button";
import CartContext from "./Contexts/CartContext";


const Description = (props) => {
  const CRTcontext = useContext(CartContext)
  const DesContext = useContext(DescriptionContext);
  const RemoveFn = (itmeId,item)=>{
    DesContext.removeItem(itmeId)
    CRTcontext.addItem(item)
    
  }

  let items = (
    <ul>
      {DesContext.items.map((item) => (
        <div >
         
          <li key={item.id} >
            <h5 className="item">{item.MedicinName}</h5>
            <h5 className="item">{item.Description}</h5>
            <h5 className="item">{item.Price}</h5>
            <h5 className="item">{item.Quantity}</h5>
          </li>
          <Button onClick={()=>{RemoveFn(item.id,item)}} 
           disabled={item.Quantity === 'OUT OF STOCK'} 
          >Add</Button>
        </div>
      ))}
    </ul>
  );

  return (
    <div>
      
      <form className="form">
        <h3 className="item">Medicine Name</h3>
        <h3 className="item">Description</h3>
        <h3 className="item">Price</h3>
        <h3 className="item">Quantity</h3>
      </form>
      {items}
    </div>
  );
};
export default Description;
