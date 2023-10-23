import React,{useRef,useContext} from "react";
import DescriptionContext from "./Contexts/DescripionContext";
import './../App.css';


const Input = (props)=>{
    const MedicinName = useRef()
    const Description = useRef()
    const Quantity = useRef()
    const Price = useRef()

   const DesContext = useContext(DescriptionContext)

    const SubmitFn = (e)=>{
        e.preventDefault();
    const Mname= MedicinName.current.value;
    const Descr= Description.current.value;
    const Quant= Quantity.current.value;
    const Pric= Price.current.value;
    const id = Math.random();
    const obj = {
        MedicinName:Mname,
        Description:Descr,
        Quantity:Quant,
        Price:Pric,
        id:id,
    }

        
    DesContext.addItem(obj)
    
        

    }

    return (
        
        <div className="app">
        <form onSubmit={SubmitFn}>
            <label>Medicin Name</label>
            <input ref={MedicinName} type="name"></input>
            <label>Description </label>
            <input ref={Description} type="name"></input>
            <label>Price</label>
            <input ref={Price} type="number"></input>
            <label>Quantity</label>
            <input ref={Quantity} type="number"></input>
            <button>Add to Product</button>
        </form>
        </div>
        
       
    )
}
export default Input;