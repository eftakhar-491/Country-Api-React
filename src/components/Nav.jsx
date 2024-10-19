import React, { useContext } from "react";
import { Theme } from "../context/Theme";

export default function Nav() {
  const theme = useContext(Theme);

  function themeHandel() {
    theme.isDark ? theme.setIsDark(false) : theme.setIsDark(true);
  }
  return (
    <>
      <nav
        className={`py-4 border-b-2  ${
          theme.isDark && "bg-[#2b3945] text-white"
        }`}
      >
        <div className="flex justify-between items-center w-11/12 lg:w-4/5 mx-auto">
          <h1 className="cursor-pointer text-xl font-bold">
            Where in the world?
          </h1>
          <div className="cursor-pointer" onClick={themeHandel}>
            <span>Dark Mood</span>
          </div>
        </div>
      </nav>
    </>
  );
}
