import { useEffect, useState } from "react";

export default function useFetchData(URL) {
  // const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      //   const res = await fetch(URL);
      //   const data = await res.json();
      //   // console.log(data);
      //   // setData(data);
      return "data";
    })();
  }, []);
}
