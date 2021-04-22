import React from "react";
import { BiMoon } from "react-icons/bi";
export const Dark = ({ toggleDarkMode }) => {
  return <BiMoon className="icon" onClick={() => toggleDarkMode()} />;
};
