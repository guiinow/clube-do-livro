import Home from "./Home";
import Associado from './Associado'
import Livros from "./Livros";
import Emprestimo from './Emprestimo'
import Compras from "./Compras";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";

function PaginaInicial() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Associado" element={<Associado/>} />
        <Route path="/Livros" element={<Livros/>} />
        <Route path="/Emprestimo" element={<Emprestimo/>} />
        <Route path="/Compras" element={<Compras/>} />
      </Routes>
      
    </Router>
  );
}

export default PaginaInicial;