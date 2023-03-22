import cadastro from "../cadastro/cadastro.css";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { api } from "../../service/api";

function AssociadoCadastro() {

  const [usuario, setUsuario] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

console.log(usuario)

  const valorInput = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        `usuario email: ${usuario.email} e usuario senha:${usuario.password}`
      );
      const response = await api.post("associate", 
        usuario, // fixed to pass just the usuario object
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
        <strong>Cadastro Associado</strong>
      </span>
      <div className="container-cadastro">
        <form onSubmit={handleSubmit} className="formulario">
          <div className="wrap-input-cadastro">
            <label for="name">Nome:
            <input
              className="input-cadastro"
              name="name"
              type="text"
              value={usuario.name} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite seu nome: "
            /></label>
            <label for="email">Email:
            <input
              className="input-cadastro"
              name="email"
              type="email"
              value={usuario.email} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite seu email: "
            /></label>
            <label for="phone">Telefone:
            <input
              className="input-cadastro"
              name="phone"
              type="text"
              value={usuario.phone} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite seu telefone: "
            /></label>
            <label for="address">Endereço:
            <input
              className="input-cadastro"
              name="address"
              type="text"
              value={usuario.address} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite seu endereço: "
            /></label>
            <label for="password">Senha de acesso:
            <input
              className="input-cadastro"
              name="password"
              type="text"
              value={usuario.password} // changed to use usuario object
              onChange={valorInput}
              placeholder="Digite sua senha: "
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

export default AssociadoCadastro;
