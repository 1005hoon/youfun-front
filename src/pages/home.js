import React, { useState } from "react";
import * as ROUTES from "../constants/routes";

import Header from "../components/header";

import logo from "../logo.svg";

export default function Home({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="YouFun" src={logo} />
        <Header.Mobile />
        <Header.NavMenu>
          <Header.NavItem>
            <Header.NavScroll to="/">홈</Header.NavScroll>
          </Header.NavItem>
          <Header.NavItem>
            <Header.NavScroll to="/">왜 YouFun?</Header.NavScroll>
          </Header.NavItem>
          <Header.NavItem>
            <Header.NavScroll to="/">YouFun 소개</Header.NavScroll>
          </Header.NavItem>
          <Header.NavItem>
            <Header.NavScroll to="/">사용방법</Header.NavScroll>
          </Header.NavItem>
          <Header.NavItem>
            <Header.CTAButton to="/register">시작하기</Header.CTAButton>
          </Header.NavItem>
        </Header.NavMenu>
      </Header.Frame>
    </Header>
  );
}
