import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";

function EmprestimoCadastro() {
  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Empréstimo</strong>
      </span>
      <div className="container-cadastro">
        <form className="formulario">
          <div className="wrap-input-cadastro">
            <label for="id-livro">Id Livro:
            <input
              className="input-cadastro"
              name="id-livro"
              type="text"
              placeholder="Digite a id do livro: "
            /></label>
            <label for="duracao">Duração:
            <input
              className="input-cadastro"
              name="duracao"
              type="text"
              placeholder="Digite a duração: "
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

export default EmprestimoCadastro;
