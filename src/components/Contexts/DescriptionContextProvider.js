import React, { useReducer } from "react";
import DescriptionContext from "./DescripionContext";

const DefaultState = {
  items: [],
  Quantity:0,
};
const DesReducer = (state, action) => {
  if (action.type === "add") {
    let updateItems
    let updateQuan
    
    if(state.Quantity<1)
    {
         updateItems = state.items.concat(action.item);  
         updateQuan = action.item.Quantity
         
    }
    else{
        updateItems = state.items.concat(action.item);
         updateQuan = Number(state.Quantity) + Number(action.item.Quantity);
         
         
    }
    return {
      items: updateItems,
      Quantity: updateQuan,
    };
  }
  if (action.type === "remove") {
    const currentindex = state.items.findIndex((item) => item.id === action.id);
    let RealQuan;
   
   if (state.items[currentindex].Quantity > 1) {
      state.items[currentindex].Quantity--
      RealQuan=state.Quantity-1;
    }
    else if(state.items[currentindex].Quantity===1){
     
        state.items[currentindex].Quantity='OUT OF STOCK'
        RealQuan=state.Quantity
         
      }

    return {
      items: state.items,
      Quantity: RealQuan,
    };
  }
  return DefaultState;
};
const DesContextProvide = (props) => {
  const [DesState, DispatchDesFn] = useReducer(DesReducer, DefaultState);

  const AddItemsFunction = (items) => {
    DispatchDesFn({ type: "add", item: items });
    console.log(DesContext.Quantity)
  };
  const RemoveItemFunction = (id) => {
    DispatchDesFn({ type: "remove", id: id });
    console.log(DesContext.Quantity)
  };

  const DesContext = {
    items: DesState.items,
    Quantity: DesState.Quantity,
    addItem: AddItemsFunction,
    removeItem: RemoveItemFunction,
  };
  console.log(DesContext.Quantity)

  return (
    <DescriptionContext.Provider value={DesContext}>
      {props.children}
    </DescriptionContext.Provider>
  );
};
export default DesContextProvide;