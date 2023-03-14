import cadastro from "../cadastro/cadastro.css";

function AssociadoCadastro() {
  return (
    <div className="container">
      <span class="cadastro-titulo">
        {" "}
        <strong>Cadastro Associado</strong>
      </span>
      <div className="container-cadastro">
        <form className="formulario">
          <div className="wrap-input">
            <label for="nome">Nome:
            <input
              className="input-cadastro"
              name="nome"
              type="text"
              placeholder="Digite seu nome: "
            /></label>
            <label for="telefone">Telefone:
            <input
              className="input-cadastro"
              name="telefone"
              type="text"
              placeholder="Digite seu telefone: "
            /></label>
            <label for="email">Email:
            <input
              className="input-cadastro"
              name="email"
              type="email"
              placeholder="Digite seu email: "
            /></label>
            <label for="endereco">Endereço:
            <input
              className="input-cadastro"
              name="endereco"
              type="text"
              placeholder="Digite seu endereço: "
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

export default AssociadoCadastro;
