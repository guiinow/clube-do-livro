import { useState } from "react";
import "./styles.css";
import icon from "../assets/booksIcon.png";
import { api } from "../service/api";
import { useNavigate } from "react-router-dom";


function Login() {
  
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const navigate = useNavigate();

  const valorInput = (e) =>
    setUsuario({ ...usuario, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    // changed Login to handleSubmit
    e.preventDefault();

    try {
      console.log(
        `usuario email: ${usuario.email} e usuario senha:${usuario.password}`
      );
      const response = await api.post("associate/login",
        usuario, // fixed to pass just the usuario object
      );
      if(response.data == 200){
        navigate('/Home');
      }else{
        console.log(response.data)
        window.alert("Usuário não cadastrado.\nTente novamente com usuário existente");
        navigate('/');
      }
    } catch (error) {
      console.log(error);
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
            </div>
            <button id="TogglePassword" type="button" onClick={handleTogglePassword}>
                {" "}
                {/* added button to show/hide password */}
                {showPassword ? "Esconder senha" : "Mostrar senha"}{" "}
                {/* changed text of button */}
              </button>
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
