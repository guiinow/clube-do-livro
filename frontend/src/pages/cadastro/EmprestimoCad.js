import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

function EmprestimoCadastro() {
  const [loan, setLoan] = useState({
    associateId: "",
    bookId: "",
    duration: "",
    status: "",
    createat: "",
    updateat: "",
  });

  console.log(loan);

  const navigate = useNavigate();

  const valorInput = (e) =>
    setLoan({ ...loan, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(loan);
      const response = await api.post(
        "loan",
        loan // fixed to pass just the usuario object
      );
      window.alert("Emprestimo cadastrado com sucesso!");
      navigate("/Emprestimo");
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
            <label for="associateId">
              Id Associado:
              <input
                className="input-cadastro"
                name="associateId"
                type="text"
                value={loan.associateId} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a id do associado: "
              />
            </label>
            <label for="bookId">
              Id Livro:
              <input
                className="input-cadastro"
                name="bookId"
                type="text"
                value={loan.bookId} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a id do livro: "
              />
            </label>
            <label for="duration">
              Duração:
              <input
                className="input-cadastro"
                name="duration"
                type="text"
                value={loan.duration} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a duração: "
              />
            </label>
            <label for="status">
              Status:
              <input
                className="input-cadastro"
                name="status"
                type="text"
                value={loan.status} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a o status: "
              />
            </label>
            <label for="createat">
              Data:
              <input
                className="input-cadastro"
                name="createat"
                type="date"
                value={loan.createat} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a duração: "
              />
            </label>
            <label for="updateat">
              Data:
              <input
                className="input-cadastro"
                name="updateat"
                type="date"
                value={loan.updateat} // changed to use usuario object
                onChange={valorInput}
                placeholder="Digite a duração: "
              />
            </label>
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
