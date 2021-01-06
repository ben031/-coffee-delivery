import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import CoffeeContext from "../context";
import { PayButton } from "./Button";

const Modal = ({ coffee }) => {
  const coffeeContext = useContext(CoffeeContext);

  const { changeModalStateFalse, addCart, addComma } = coffeeContext;

  const { photo, id, name, price } = coffee;

  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber((num) => num + 1);
  };

  const decrease = () => {
    if (number <= 0) {
      return;
    } else {
      setNumber((num) => num - 1);
    }
  };

  const commaPrice = addComma(price);
  const commaPrice2 = addComma(price * number);

  return (
    <div className="modal">
      <Icon
        onClick={() => {
          changeModalStateFalse(id);
        }}
      >
        <FontAwesomeIcon icon={faTimes} color="azure" size="3x" />
      </Icon>
      <img src={photo} alt="modal pic" className="modal-pic" />
      <form className="modal-form">
        <div className="modalnameprice">
          <h2>{name}</h2>
          <h4>가격: {commaPrice}원</h4>
        </div>
        <div className="setQuantity">
          <span className="decrease" onClick={decrease}>
            -
          </span>
          <span className="quantity">{number}</span>
          <span className="increase" onClick={increase}>
            +
          </span>
        </div>
        <div></div>
        <div className="buttons">
          <PayButton
            style={{
              width: "55%",
              borderRadius: "7px",
              marginTop: "2rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            onClick={(e) => {
              e.preventDefault();
              addCart(id, price, photo, name, number);
              changeModalStateFalse(id);
            }}
          >
            주문 담기🪄 {commaPrice2}원
          </PayButton>
        </div>
      </form>
    </div>
  );
};

export default Modal;

const Icon = styled.span`
  position: absolute;
  top: 8%;
  right: 10%;
  cursor: pointer;
`;
