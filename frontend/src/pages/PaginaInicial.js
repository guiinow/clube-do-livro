import Home from "./Home";
import Associado from './Associado'
import Livros from "./Livros";
import Emprestimo from './Emprestimo'
import Compras from "./Compras";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AssociadoCadastro from "./cadastro/AssociadoCad";
import ComprasCadastro from './cadastro/ComprasCad';
import LivrosCadastro from "./cadastro/LivrosCad";
import EmprestimoCadastro from "./cadastro/EmprestimoCad";


function PaginaInicial() {
  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/associado" element={<Associado/>} />
        <Route path="/livros" element={<Livros/>} />
        <Route path="/emprestimo" element={<Emprestimo/>} />
        <Route path="/compras" element={<Compras/>} />
        <Route path="/associado/cadastro" element={<AssociadoCadastro/>}/>
        <Route path="/livros/cadastro" element={<LivrosCadastro/>}/>
        <Route path="/compras/cadastro" element={<ComprasCadastro/>}/>
        <Route path="/emprestimo/cadastro" element={<EmprestimoCadastro/>}/>
      </Routes>
      
    </Router>
  );
}

export default PaginaInicial;