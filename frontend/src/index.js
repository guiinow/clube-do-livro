import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import PaginaInicial from "./pages/PaginaInicial";
import AssociadoCadastro from './pages/cadastro/AssociadoCad'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PaginaInicial />
  </React.StrictMode>,
  document.getElementById("root")
);


