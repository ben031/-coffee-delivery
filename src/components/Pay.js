import React, { useContext } from "react";
import styled from "styled-components";
import CoffeeContext from "../context";
import PayPal from "../PayPal";
import kakao from "../images/카카오페이.png";
const Pay = ({ history }) => {
  const coffeeContext = useContext(CoffeeContext);

  const { ordered, setOrdered } = coffeeContext;

  const cartPrice = ordered.map((each) => each.price * each.quantity);

  const totalPrice = cartPrice.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  const clearCart = () => {
    setOrdered([]);
  };

  return (
    <PayBlock>
      <p>결제 수단을 선택해주세요!</p>
      <PayPal history={history} total={totalPrice} clearCart={clearCart} />
      <KakaoButton>
        <img src={kakao} alt="kakaoPayButton" />
      </KakaoButton>
    </PayBlock>
  );
};

export default Pay;

const PayBlock = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
    font-weight: 300;
    color: black;
    margin-bottom: 3rem;
  }
  margin: 6rem 0;
`;

const KakaoButton = styled.button`
  border: none;
  background: none;
  margin-top: 2rem;
  padding: 2px 20px;
  outline: none;
  cursor: pointer;

  img {
    width: 90px;
  }
  :active {
    transform: scale(0.9);
  }
`;
