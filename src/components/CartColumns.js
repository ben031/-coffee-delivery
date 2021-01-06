import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Columns>
      <h2>사진</h2>
      <h2>상품명</h2>
      <h2>수량</h2>
      <h2>금액</h2>
      <h2></h2>
    </Columns>
  );
};

export default CartColumns;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
