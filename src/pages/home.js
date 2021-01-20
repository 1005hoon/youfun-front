import React, { useState } from "react";
import * as ROUTES from "../constants/routes";

import Header from "../components/header";
import Navbar from "../components/navbar";

import logo from "../logo.svg";

export default function Home({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header>
        <Header.Container>
          <Navbar>
            <h1>logo</h1>
            <ul>
              <li>some list</li>
            </ul>
          </Navbar>
        </Header.Container>
      </Header>
    </>
  );
}
