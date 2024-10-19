import React from "react";

export default function CountryCard({
  flag,
  capital,
  population,
  name,
  region,
}) {
  return (
    <>
      <section className="cursor-pointer w-[280px] shadow-xl p-3">
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
