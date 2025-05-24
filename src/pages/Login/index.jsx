import "./style.css";
import Img_LS from "../../assets/Img_LS.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleLogin(e) {
    e.preventDefault();
    let tempError = {}
    
    if (!email){
      tempError.email = "Preencha o campo E-mail"}
    else if(!emailRegex.test(email)){
      tempError.email="Digite um E-mail valido"
    }

    if (!password)
      tempError.password = "Preencha o campo Senha"

    setError(tempError)
  }

  function clearEmailError() {
  if (error.email) {
    setError(prev => ({ ...prev, email: "" }));
  }
}

function clearPasswordError() {
  if (error.password) {
    setError(prev => ({ ...prev, password: "" }));
  }
}

  return (
    <div id="LoginContainer">
      <div id="ImgLS">
        <img src={Img_LS} alt="Imagem Login" />
      </div>
      <div id="LoginForm">
        <h2>Faça Login para continuar</h2>
    
        <span id="Text">E-mail</span>
         {error.email && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error.email}</p>
        )}
        <Input
       
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => 
          {setEmail(e.target.value)
          clearEmailError("email");
          
           }}
        />

        <span id="Text">Senha</span>
         {error.password && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error.password}</p>
        )}
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) =>{ 
          setPassword(e.target.value)
          clearPasswordError("password");
            
          }}
          
          
          
        />

        <Button text="Entrar" type="auth" onClick={handleLogin} />

        <span id="TextLogin">
          <p>Você ainda não tem conta?</p>
          <a href="/SignUp"> Cadastre-se</a>
        </span>
      </div>
    </div>
  );
}

export default Login;
