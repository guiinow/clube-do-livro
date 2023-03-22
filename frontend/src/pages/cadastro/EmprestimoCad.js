import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { api } from "../../service/api";

function EmprestimoCadastro() {

  const [loan, setLoan] = useState({
    associateid: "",
    bookid: "",
    duration: "",
    createat: "",
  });

console.log(loan)

  const valorInput = (e) =>
    setLoan({ ...loan, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        loan
      );
      const response = await api.post("loan", 
        loan, // fixed to pass just the usuario object
      );
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <div className="container">
      <Navbar />
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Empréstimo</strong>
      </span>
      <div className="container-cadastro">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="wrap-input-cadastro">
            <label for="associateid">Id Associado:
            <input
              className="input-cadastro"
              name="associateid"
              type="text"
              value={loan.associateid} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a id do livro: "
            /></label>
            <label for="bookid">Id Livro:
            <input
              className="input-cadastro"
              name="bookid"
              type="text"
              value={loan.bookid} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a id do livro: "
            /></label>
            <label for="duration">Duração:
            <input
              className="input-cadastro"
              name="duration"
              type="text"
              value={loan.duration} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a duração: "
            /></label>
            <label for="createat">Data:
            <input
              className="input-cadastro"
              name="createat"
              type="date"
              value={loan.createat} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite a duração: "
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

export default EmprestimoCadastro;
