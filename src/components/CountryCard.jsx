import React from "react";

export default function CountryCard() {
  return (
    <>
      <section className="max-w-[280px] shadow-lg p-3">
        <img className="w-full" src="" alt="" />
        <h1 className="mt-2 text-lg font-bold">Country Name</h1>
        <div className="text-sm font-semibold">
          Population : <span></span>
        </div>
        <div className="text-sm font-semibold">
          Region : <span></span>
        </div>
        <div className="text-sm font-semibold">
          Capital : <span></span>
        </div>
      </section>
    </>
  );
}
