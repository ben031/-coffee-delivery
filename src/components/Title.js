import { faArrowLeft, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Title = () => {
  const [backward, setBackward] = useState(false);

  const setTrue = () => {
    setBackward(true);
  };

  const setFalse = () => {
    setBackward(false);
  };

  return (
    <Name>
      <Visibility backward={backward}>
        <Link to="/" onClick={setFalse}>
          <FontAwesomeIcon icon={faArrowLeft} color="black" size="2x" />
        </Link>
      </Visibility>
      <h1>커피의 커피에 의한 커피를 위한</h1>
      <Link to="/cart" onClick={setTrue}>
        <FontAwesomeIcon icon={faCartPlus} color="black" size="2x" />
      </Link>
    </Name>
  );
};

export default Title;

const Name = styled.div`
  color: darkcyan;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const Visibility = styled.span`
  visibility: ${(props) => props.backward || "hidden"};
`;
