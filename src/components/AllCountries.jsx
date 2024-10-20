import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import { Theme } from "../context/Theme";

export default function AllCountries() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    (async () => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
        });
    })();
  }, []);

  console.log(allData);
  const theme = useContext(Theme);

  return (
    <>
      <main
        className={`lg:w-4/5 w-11/12 mt-5 gap-3 flex justify-evenly flex-wrap mx-auto ${
          theme.isDark && "bg-[#202c37]"
        }`}
      >
        {/* <CountryDetails /> */}
        {allData?.map((item, i) => (
          <CountryCard
            key={i}
            flag={item?.flags?.png}
            capital={item?.capital}
            region={item?.region}
            population={item?.population}
            name={item?.name?.common}
            fullDetails={item}
          />
        ))}
      </main>
    </>
  );
}
