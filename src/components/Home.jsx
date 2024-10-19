import React, { useContext } from "react";
import Nav from "./Nav";
import AllCountries from "./AllCountries";
import { Theme } from "../context/Theme";

export default function Home() {
  const theme = useContext(Theme);
  return (
    <div className={`${theme.isDark && "bg-[#202c37]"} max-w-[1440px] mx-auto`}>
      <Nav />
      <AllCountries />
    </div>
  );
}
