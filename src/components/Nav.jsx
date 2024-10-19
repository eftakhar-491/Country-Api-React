import React from "react";

export default function Nav() {
  return (
    <>
      <nav className=" py-4 border-b-2 flex justify-between items-center w-11/12 lg:w-4/5 mx-auto">
        <h1 className="cursor-pointer text-xl font-bold">
          Where in the world?
        </h1>
        <div className="cursor-pointer">
          <span>Dark Mood</span>
        </div>
      </nav>
    </>
  );
}
