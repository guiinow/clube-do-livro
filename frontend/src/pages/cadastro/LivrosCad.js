import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";


function LivrosCadastro() {

  const [livro, setLivro] = useState({
    title: "",
    author: "",
    description: "",
    publisher: "",
  });

    const navigate = useNavigate();

console.log(livro)

  const valorInput = (e) =>
    setLivro({ ...livro, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        livro
      );
      const response = await api.post("books", 
        livro, // fixed to pass just the usuario object
      );
      window.alert("Livro cadastrado com sucesso!");
      navigate("/Livros");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Livro</strong>
      </span>
      <div className="container-cadastro">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="wrap-input-cadastro">
            <label for="title">Título:
            <input
              className="input-cadastro"
              name="title"
              type="text"
              value={livro.title} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite o título: "
            /></label>
            <label for="author">Autor:
            <input
              className="input-cadastro"
              name="author"
              type="text"
              value={livro.author} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite o autor: "
            /></label>
            <label for="description">Descrição:
            <input
              className="input-cadastro"
              name="description"
              type= "text"
              value={livro.description} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a descrição: "
            /></label>
            <label for="publisher">Editora:
            <input
              className="input-cadastro"
              name="publisher"
              type="text"
              value={livro.publisher} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a editora: "
            /></label>
            <div class="container-cadastro-form-btn">
              <button class="cadastro-form-btn" onSubmit={handleSubmit}>
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
