import React from "react";
import { Light, Dark } from "../components";
import { useStore } from "./state";
import { Helmet } from "react-helmet";
export const Toggle = () => {
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const dark = useStore((state) => state.dark);
  console.log(dark);
  return (
    <>
      <Helmet>
        <html dark={`${dark ? "true" : "false"}`} />
      </Helmet>
      {dark ? (
        <Dark toggleDarkMode={toggleDarkMode} />
      ) : (
        <Light toggleDarkMode={toggleDarkMode} />
      )}
    </>
  );
};
