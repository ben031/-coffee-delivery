import React, { useContext } from "react";
import styled from "styled-components";
import CoffeeContext from "../context";
import Cart from "./Cart";
import { PayButton } from "./Button";
import CartColumns from "./CartColumns";
import { Link } from "react-router-dom";

const CartList = () => {
  const coffeeContext = useContext(CoffeeContext);

  const { ordered, addComma, removeItem } = coffeeContext;

  const cartPrice = ordered.map((each) => each.price * each.quantity);

  const totalPrice = cartPrice.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const commaPrice = addComma(totalPrice);
  console.log(ordered);

  return (
    <>
      <CartGrid>
        {ordered.length > 0 && <CartColumns />}
        {ordered.length > 0 &&
          ordered.map((orderedCoffee) => (
            <Cart
              key={orderedCoffee.id}
              orderedCoffee={orderedCoffee}
              addComma={addComma}
              removeItem={removeItem}
            />
          ))}
      </CartGrid>

      <Link to="/pay">
        <PayButton style={{ bottom: 0, left: 0, width: "100%" }}>
          {commaPrice}원 결제하기
        </PayButton>
      </Link>
    </>
  );
};

export default CartList;

const CartGrid = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-row-gap: 1rem;
`;
