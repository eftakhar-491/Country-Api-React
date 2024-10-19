import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import useFetchData from "../Hooks/useFetchData";
import { Theme } from "../context/Theme";

export default function AllCountries() {
  const allData = useFetchData("https://restcountries.com/v3.1/all");
  const theme = useContext(Theme);

  return (
    <>
      <main
        className={`lg:w-4/5 w-11/12 mt-5 gap-3 flex justify-evenly flex-wrap mx-auto ${
          theme.isDark && "bg-[#202c37]"
        }`}
      >
        {allData.map((item, i) => (
          <CountryCard
            key={i}
            flag={item?.flags?.png}
            capital={item?.capital}
            region={item?.region}
            population={item?.population}
            name={item?.name?.common}
          />
        ))}
      </main>
    </>
  );
}
