import "./styles/inicial.css";
import logoEscrita from '../assets/bookClubLogo.png'
import Associado from "./Associado";
import { Route, Link, Routes } from "react-router-dom";

function PaginaInicial() {
return (
<div class="Container">

  <div class="navbarContainer">

    <div class="menuContainer">
      
      <img src={logoEscrita} />

      <ul>
        <li >Associados
        </li>
        <li>Compras</li>
        <li>Empréstimo</li>
        <li>Livros</li>
        <li>Home</li>
        {/* <li>lucas</li> */}
      </ul>

     </div>

  </div>

  <div class="Main">
    {/* <img src={logoEscrita}></img> */}
  </div>

</div>



);
}

export default PaginaInicial;