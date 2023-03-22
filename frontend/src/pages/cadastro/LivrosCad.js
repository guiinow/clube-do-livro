import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";

function LivrosCadastro() {
  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Livro</strong>
      </span>
      <div className="container-cadastro">
        <form className="formulario">
          <div className="wrap-input-cadastro">
            <label for="titulo">Título:
            <input
              className="input-cadastro"
              name="titulo"
              type="text"
              placeholder="Digite o título: "
            /></label>
            <label for="autor">Autor:
            <input
              className="input-cadastro"
              name="autor"
              type="text"
              placeholder="Digite o autor: "
            /></label>
            <label for="editora">Editora:
            <input
              className="input-cadastro"
              name="editora"
              type="text"
              placeholder="Digite a editora: "
            /></label>
            <label for="descricao">Descrição:
            <input
              className="input-cadastro"
              name="descricao"
              type= "text"
              placeholder="Digite a descrição: "
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

export default LivrosCadastro;
