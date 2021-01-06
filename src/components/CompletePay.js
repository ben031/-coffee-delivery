import React from "react";
import { PayButton } from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompletePay = () => {
  return (
    <CompleteBlock>
      <p>결제가 완료되었습니다🙂</p>
      <Link to="/">
        <PayButton
          style={{
            position: "static",
            fontSize: "18px",
            padding: "10px 20px",
            borderRadius: "5px",
            marginTop: "5rem",
          }}
        >
          메뉴로 돌아가기
        </PayButton>
      </Link>
    </CompleteBlock>
  );
};

export default CompletePay;

const CompleteBlock = styled.div`
  text-align: center;
  margin-top: 40%;
  transform: translateY(-40%);
  p {
    font-size: 2rem;
    font-weight: 300;
  }
`;
