import React, { useContext } from "react";

import { Theme } from "../context/Theme";

export default function CountryCard({
  flag,
  capital,
  population,
  name,
  region,
}) {
  const theme = useContext(Theme);
  console.log(theme.isDark);
  return (
    <>
      <section
        className={`cursor-pointer w-[280px] shadow-xl p-3 ${
          theme.isDark && "bg-[#2b3945] text-white"
        }`}
      >
        <img className="w-full" src={flag} alt={name} />
        <h1 className="mt-2 text-lg font-bold">{name}</h1>
        <div className="text-sm font-semibold">
          Population : <span>{population}</span>
        </div>
        <div className="text-sm font-semibold">
          Region : <span>{region}</span>
        </div>
        <div className="text-sm font-semibold">
          Capital : <span>{capital}</span>
        </div>
      </section>
    </>
  );
}
