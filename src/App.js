import React, { Fragment } from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/AvailableMeals";
import Summary from "./components/Meals/Summary";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Cart />
        <Summary />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
