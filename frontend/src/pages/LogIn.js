import { useState } from "react";
import "./styles.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div class="container">
      <div class="container-login">
        <div class="wrap-login">
          <form class="loginform">
            <span class="login-form-title">Bem Vindo!</span>
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
              <span class="focus-input" data-placeholder="Password"></span>
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
