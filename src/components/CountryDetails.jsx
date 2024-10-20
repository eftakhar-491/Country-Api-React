import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CountryDetails() {
  const [countryData, setCountryData] = useState({});
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    console.log("hello");
    fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        console.log(data);
        setCountryData({
          flag: data.flags?.png,
          name: data.name?.common,
          nativeName: Object.values(data.name.nativeName).map(
            (item) => `${item.common}, `
          ),
          population: data?.population,
          region: data?.region,
          capital: data?.capital.map((item) => `${item}, `),
          subRegion: data.subregion,
          currencies: Object.values(data.currencies).map(
            (item) => `${item.symbol} ${item.name}, `
          ),
          tld: data.tld.map((item) => `${item}, `),
        });
      });
  }, [name]);

  return (
    <>
      <section className="h-screen items-center flex-col md:flex-row flex gap-3 justify-evenly w-full">
        <div>
          <img src={countryData.flag} alt="" />
        </div>
        <div className="">
          <h1 className="text-2xl font-bold mb-5">{countryData.name}</h1>

          <div className="mb-8 gap-x-3 grid grid-cols-1 md:grid-cols-2">
            <div>
              Native Name : <span>{countryData.nativeName}</span>
            </div>
            <div>
              Top Level Domain : <span>{countryData.tld}</span>
            </div>
            <div>
              Population : <span>{countryData?.population}</span>
            </div>
            <div>
              Currencies : <span>{countryData.currencies}</span>
            </div>
            <div>
              Region : <span>{countryData?.region}</span>
            </div>
            <div>
              Sub Region : <span>{countryData.subRegion}</span>
            </div>
            <div>
              Capital : <span>{countryData.capital}</span>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Border Countries</h2>
            <div className="flex flex-wrap gap-2">
              <p className="cursor-pointer px-5 text-lg font-bold rounded-lg py-2 bg-slate-400">
                france
              </p>
              <p className="px-5 text-lg font-bold rounded-lg py-2 bg-slate-400">
                france
              </p>
              <p className="px-5 text-lg font-bold rounded-lg py-2 bg-slate-400">
                france
              </p>
              <p className="px-5 text-lg font-bold rounded-lg py-2 bg-slate-400">
                france
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
