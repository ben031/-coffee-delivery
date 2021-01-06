import React, { useState } from "react";
import { Route } from "react-router-dom";
import CartList from "./components/CartList.js";
import MenuList from "./components/MenuList.js";
import Title from "./components/Title.js";
import { CoffeeContextProvider } from "./context.js";
import allMenu from "./data.js";
import Pay from "./components/Pay";
import CompletePay from "./components/CompletePay.js";

const App = () => {
  const [menu, setMenu] = useState(allMenu);

  const [ordered, setOrdered] = useState([]);

  const changeModalState = (id) => {
    setMenu(
      menu.map((each) => (each.id === id ? { ...each, modal: true } : each))
    );
  };

  const changeModalStateFalse = (id) => {
    setMenu(
      menu.map((each) => (each.id === id ? { ...each, modal: false } : each))
    );
  };

  const addCart = (id, price, photo, name, num) => {
    changeModalStateFalse(id);

    const findItem = ordered.find((item) => item.id === id);

    const orderedCoffee = {
      id,
      name,
      photo,
      price,
      quantity: num,
    };

    if (orderedCoffee.quantity === 0) {
      return;
    } else {
      if (!findItem) {
        setOrdered(ordered.concat(orderedCoffee));
      } else {
        setOrdered(
          ordered.map((orderedOne) =>
            orderedOne.id === id
              ? { ...orderedOne, quantity: orderedOne.quantity + num }
              : orderedOne
          )
        );
      }
    }
  };

  const addComma = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const removeItem = (id) => {
    setOrdered(ordered.filter((each) => each.id !== id));
  };

  return (
    <CoffeeContextProvider
      value={{
        menu,
        ordered,
        changeModalState,
        changeModalStateFalse,
        addCart,
        setOrdered,
        addComma,
        removeItem,
      }}
    >
      <Title />
      <Route path="/" component={MenuList} exact={true} />
      <Route path="/cart" component={CartList} />
      <Route path="/pay" component={Pay} />
      <Route path="/complete" component={CompletePay} />
    </CoffeeContextProvider>
  );
};

export default App;
