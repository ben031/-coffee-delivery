import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Cart = ({ orderedCoffee, addComma, removeItem }) => {
  const { id, name, photo, price, quantity } = orderedCoffee;

  const commaPrice = addComma(price * quantity);

  return (
    <CartBlock>
      <img src={photo} alt="orderedCoffee" />
      <span>{name}</span>
      <span>{quantity}잔</span>
      <span>{commaPrice}원</span>
      <TrashIcon>
        <FontAwesomeIcon
          icon={faTrashAlt}
          color="#ffa400"
          onClick={() => removeItem(id)}
        />
      </TrashIcon>
    </CartBlock>
  );
};

export default Cart;

const CartBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  span {
    font-size: 20px;
    height: 150px;
    line-height: 150px;
  }
  img {
    display: block;
    margin: 0 auto;
    height: 150px;
    width: 150px;
    object-fit: contain;
    border: 0.5px gray solid;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    img {
      margin-bottom: 1rem;
    }
    span {
      height: 22px;
      line-height: 22px;
    }
  }
`;

const TrashIcon = styled.span`
  cursor: pointer;
`;
