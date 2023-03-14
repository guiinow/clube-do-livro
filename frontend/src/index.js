import React from "react";
import ReactDOM from "react-dom/client";
import LogIn from "./pages/LogIn";
import PaginaInicial from "./pages/PaginaInicial";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>,
  document.getElementById("root")
);


