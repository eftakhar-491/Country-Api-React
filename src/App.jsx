import { useContext } from "react";
import "./App.css";
import AllCountries from "./components/AllCountries";
import Nav from "./components/Nav";
import { Theme } from "./context/Theme";
import ThemeData from "./Hooks/ThemeData";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  const theme = useContext(Theme);

  return (
    <Theme.Provider value={ThemeData()}>
      <Nav />
      <Outlet />
      {/* <AllCountries /> */}
      {/* <Home /> */}
    </Theme.Provider>
  );
}

export default App;
