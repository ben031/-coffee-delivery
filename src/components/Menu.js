import React from "react";
import Modal from "./Modal";
import styled from "styled-components";

const Menu = ({ coffee, changeModalState, addComma }) => {
  const { name, price, photo, modal, id } = coffee;

  const commaPrice = addComma(price);

  return (
    <>
      <List>
        <img
          src={photo}
          alt="coffee pics"
          className="coffeeImg"
          onClick={() => {
            changeModalState(id);
          }}
        />
        <CoffeeBlock>
          <h3>{name}</h3>
          <h4>{commaPrice}원</h4>
        </CoffeeBlock>
      </List>
      {modal && <Modal coffee={coffee} />}
    </>
  );
};

export default Menu;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
`;

const CoffeeBlock = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
