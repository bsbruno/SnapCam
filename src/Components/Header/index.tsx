import React from "react";
import { HeaderStyles } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <HeaderStyles>
      <h1> {children} </h1>
    </HeaderStyles>
  );
};

export default Header;
