import React from "react";
import { BiSun } from "react-icons/bi";

export const Light = ({ toggleDarkMode }) => {
  return <BiSun className="icon" onClick={() => toggleDarkMode()} />;
};
