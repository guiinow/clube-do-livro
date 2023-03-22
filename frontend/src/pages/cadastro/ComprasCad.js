import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";


function ComprasCadastro() {

  const [compra, setCompra] = useState({
    price: "",
    date: "",
  });
  const navigate = useNavigate();


console.log(compra)

  const valorInput = (e) =>
    setCompra({ ...compra, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        compra.date
      );
      const response = await api.post("buy", 
        compra, // fixed to pass just the usuario object
      );
      window.alert("Compra cadastrado com sucesso!");
      navigate("/Compras");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Compra</strong>
      </span>
      <div className="container-cadastro">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="wrap-input-cadastro">
            <label for="price">Preço:
            <input
              className="input-cadastro"
              name="price"
              type="text"
              value={compra.price} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite o preço: "
            /></label>
            <label for="date">Data:
            <input
              className="input-cadastro"
              name="date"
              type="date"
              value={compra.date} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a data: "            
            /></label>
            <div class="container-cadastro-form-btn">
              <button class="cadastro-form-btn" onSubmit={handleSubmit} >
                Cadastrar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ComprasCadastro;
