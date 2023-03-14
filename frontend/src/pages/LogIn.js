import { useState } from "react";
import "./styles.css";
import icon from "../assets/booksIcon.png"

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="container">
      <div class="container-login">
        <div class="wrap-login">
          <form class="loginform">
            <span class="icon"><img src={icon} alt="Logo BookClub" /></span>
            <span class="login-form-title"> <strong>Bem Vindo!</strong></span>
            <div class="wrap-input">
              <input
                class={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span class="focus-input" data-placeholder="Email"></span>
            </div>

            <div class="wrap-input">
              <input
                class={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span class="focus-input" data-placeholder="Senha"></span>
            </div>

            <div class="container-login-form-btn">
              <button class="login-form-btn">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
