import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";

function ComprasCadastro() {
  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Compra</strong>
      </span>
      <div className="container-cadastro">
        <form className="formulario">
          <div className="wrap-input-cadastro">
            <label for="preco">Preço:
            <input
              className="input-cadastro"
              name="preco"
              type="text"
              placeholder="Digite o preço: "
            /></label>
            <label for="data">Data:
            <input
              className="input-cadastro"
              name="data"
              type="text"
              placeholder="Digite a data: "            
            /></label>
            <div class="container-cadastro-form-btn">
              <button class="cadastro-form-btn" type="submit">
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
