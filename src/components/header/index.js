import React from "react";
import { Background, Container } from "./styles/header";

const Header = ({ children, ...restProps }) => {
  return <Background {...restProps}>{children}</Background>;
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
export default Header;
