import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Background,
  Container,
  Logo,
  MobileIcon,
  Hamburger,
  NavMenu,
  NavItem,
  NavScrollLink,
  CTALink,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <RouterLink to={to}>
      <Logo {...restProps} />
    </RouterLink>
  );
};

Header.Mobile = function HeaderMobile({ ...restProps }) {
  return (
    <MobileIcon {...restProps}>
      <Hamburger />
    </MobileIcon>
  );
};

Header.NavMenu = function HeaderNavMenu({ children, ...restProps }) {
  return <NavMenu>{children}</NavMenu>;
};

Header.NavItem = function HeaderNavItem({ children, ...restProps }) {
  return <NavItem>{children}</NavItem>;
};

Header.NavScroll = function HeaderNavScroll({ children, ...restProps }) {
  return <NavScrollLink {...restProps}>{children}</NavScrollLink>;
};

Header.CTAButton = function HeaderCTAButton({ children, ...restProps }) {
  return <CTALink {...restProps}>{children}</CTALink>;
};
