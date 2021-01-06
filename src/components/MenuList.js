import React, { useContext } from "react";
import styled from "styled-components";
import CoffeeContext from "../context";
import Menu from "./Menu";

const MenuList = () => {
  const coffeeContext = useContext(CoffeeContext);
  const { menu, changeModalState, addComma } = coffeeContext;
  return (
    <MenuGrid>
      {menu.map((each) => (
        <Menu
          key={each.id}
          coffee={each}
          changeModalState={changeModalState}
          addComma={addComma}
        />
      ))}
    </MenuGrid>
  );
};

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default MenuList;
