import React from "react";
import { Nav } from "./styles/navbar";

const Navbar = ({ children, ...restProps }) => {
  return <Nav {...restProps}>{children}</Nav>;
};

export default Navbar;
