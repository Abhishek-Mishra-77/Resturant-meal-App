import React, {useState } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/AvailableMeals";
import Summary from "./components/Meals/Summary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/storeContext/CartProvider";



function App() {

  const [showCart, setCartShow] = useState(false);

  // This is will unable to Cart Handler when we click on Your Cart button 
  const openCartHandler = () => {
    setCartShow(true)
  }

  // This is will disable to Cart Handler when we click on close button which is present in Cart
  const closeCartHandler = () => {
    setCartShow(false);
  }



  return (
    <CartProvider>
      <Header openCartHandler={openCartHandler} />
      <main>
        {showCart && <Cart closeCartHandler={closeCartHandler} />}
        <Summary />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
