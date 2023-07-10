import React from "react";
import Context from "./Context";
const CartProvider = (props) => {

      const addItemCartHandler = (item) => {}

      const removeItemCartHandler = (id) => {}

      const cartContext = {
            items : [],
            totalAmount : 3,
            addItem : addItemCartHandler,
            removeItem : removeItemCartHandler
      }

      return (
            <Context.Provider value={cartContext}>{props.children}</Context.Provider>
      )
}


export default CartProvider;