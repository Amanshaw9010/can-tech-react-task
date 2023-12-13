import React, { useState } from "react";
import Navbar from "./Navbar";
import { routes } from "../../constant";
import Drawer from "./Drawer";

const Navigation = () => {
  const doc = document.querySelector("html");

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      doc.style.position = "fixed";
    } else {
      doc.style.position = "relative";
    }
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
