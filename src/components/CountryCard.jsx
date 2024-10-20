import React, { useContext } from "react";

import { Theme } from "../context/Theme";
import { Link } from "react-router-dom";

export default function CountryCard({
  fullDetails,
  flag,
  capital,
  population,
  name,
  region,
}) {
  const theme = useContext(Theme);
  function moreDetails(data) {
    console.log(data);
  }
  return (
    <>
      <Link to={`/country/${name}`}>
        <section
          onClick={() => moreDetails(fullDetails)}
          className={` cursor-pointer w-[280px] shadow-xl p-4 rounded-lg ${
            theme.isDark && "bg-[#2b3945] text-white"
          }`}
        >
          <img
            className="h-40 w-full rounded-lg"
            src={flag}
            alt={`${name} Flag `}
          />
          <h1 className="mt-3 mb-4 text-lg font-bold">{name}</h1>
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
      </Link>
    </>
  );
}
