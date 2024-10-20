import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import CountryDetails from "./components/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>not found</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <h1>not found</h1>,
      },
      {
        path: "/cc",
        element: <h1>Hello CC</h1>,
        errorElement: <h1>not found</h1>,
      },
      {
        path: "/country/:name",
        element: <CountryDetails />,
        errorElement: <h1>not found</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
