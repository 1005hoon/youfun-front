import React, { useState } from "react";
import * as ROUTES from "../constants/routes";

import Header from "../components/header";

import logo from "../logo.svg";

export default function Home({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="container">
      <h1>Hello World</h1>
    </div>
  );
}
