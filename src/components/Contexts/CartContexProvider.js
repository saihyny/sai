import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultState = {
  items: [],
  total: 0,
};

const actionFun = (state, action) => {
  if (action.type === 'add') {
    let updatedItems;
    let updatedTotal;
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id );
    const existingCartItemItem = state.items[existingCartItemIndex]
     if(existingCartItemItem)
     {
        existingCartItemItem.Quan += 1;
        updatedTotal = state.total + Number(action.item.Price) * 1;
        updatedItems=state.items
     }else{
      const newItem={
            ...action.item,
            Quan:1,
        }
        updatedTotal=state.total+Number(action.item.Price)
        updatedItems=state.items.concat(newItem)
     }
    return {
      items: updatedItems,
      total: updatedTotal,
    };
  }

  return defaultState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(actionFun, defaultState);

  const addItems = (item) => {
    dispatchCartAction({ type: 'add', item: item });
  };

  const removeItem = (id) => {
    // Implement remove item logic here
  };

  const cartContext = {
    items: cartState.items,
    addItem: addItems,
    removeItem: removeItem,
    total: cartState.total.toFixed(2)
  };


  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
