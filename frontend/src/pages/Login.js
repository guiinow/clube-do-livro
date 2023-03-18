import { useState } from "react";
import "./styles.css";
import icon from "../assets/booksIcon.png";

function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        `usuario email: ${usuario.email} e usuario senha:${usuario.password}`
      );
      const response = await fetch("http://127.0.0.1:3000/associate/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario), // fixed to pass just the usuario object
      });

      const responseJson = await response.json(); // simplified to use async/await instead of then()
      console.log(`mostrando response ${responseJson}`)

      if (responseJson.erro === true) {
        setStatus({
          type: "erro",
          mensagem: responseJson.mensagem,
        });
      } else {
        setStatus({
          type: "success",
          mensagem: responseJson.mensagem,
        });

        // statusLogin(responseJson.tipo);
      }
    } catch (error) {
      setStatus({
        type: "erro",
        mensagem: "Erro de autenticação!",
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      {" "}
      {/* changed class to className */}
      <div className="container-login">
        <div className="wrap-login">
          <form className="loginform" onSubmit={handleSubmit}>
            {" "}
            {/* added onSubmit */}
            <span className="icon">
              <img src={icon} alt="Logo BookClub" />
            </span>
            <span className="login-form-title">
              {" "}
              <strong>Bem Vindo!</strong>
            </span>
            <div className="wrap-input">
              <input
                className={usuario.email !== "" ? "has-val input" : "input"} // changed to use usuario object
                type="email"
                name="email" // added name to match object property
                value={usuario.email} // changed to use usuario object
                onChange={valorInput} // changed to use valorInput function
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                className={usuario.password !== "" ? "has-val input" : "input"} // changed to use usuario object
                type={showPassword ? "text" : "password"} // added show/hide password feature
                name="password" // added name to match object property
                value={usuario.password} // changed to use usuario object
                onChange={valorInput} // changed to use valorInput function
              />
              <span className="focus-input" data-placeholder="Senha"></span>
              <button type="button" onClick={handleTogglePassword}>
                {" "}
                {/* added button to show/hide password */}
                {showPassword ? "Esconder" : "Mostrar"}{" "}
                {/* changed text of button */}
              </button>
            </div>
            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>{" "}
              {/* changed to use type="submit" */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
