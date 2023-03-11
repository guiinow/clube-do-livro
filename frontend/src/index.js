import React from "react";
import ReactDOM from "react-dom/client";

import LogIn from "./pages/LogIn";
import PaginaInicial from "./pages/PaginaInicial";
import Associado from "./pages/Associado";
import Compras from './pages/Compras'
import Livros from './pages/Livros'
import Emprestimo from './pages/Emprestimo'
import Home from './pages/Home'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <PaginaInicial/>,
//     children: [
//       {
//         element: <Associado/>
//       },
//       {
//         element: <Compras/>
//       },
//       {
//         element: <Emprestimo/>
//       },
//       {
//         element: <Livros/>
//       },
//     ]
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PaginaInicial />
  </React.StrictMode>,
  document.getElementById("root")
);


