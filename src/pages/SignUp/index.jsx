import "./style.css"
import { useState } from "react";
import Img_LS from "../../assets/Img_LS.svg"

import Input from "../../components/Input"
import Button from "../../components/Button"



function SignUp () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");
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

    if (!password){
      tempError.password = "Preencha o campo Senha"
    } else if(password !== passwordC){
        tempError.passwordC = "A senha não é a mesma!"
    }

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
    return(
        <div id="SignUpContainer">
        <div id="ImgLS">
            <img src={Img_LS} alt="" />
        </div>
        <div id="SignUpForm">
         <h2>Faça seu Cadastro para continuar</h2>
         <span id="Text">E-mail</span>
          {error.email && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error.email}</p>
        )}
         <Input type="e-mail"
        onChange={(e) => 
          {setEmail(e.target.value)
          clearEmailError();}}
         />
         <span id="Text">Senha</span>
         {error.password && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error.password}</p>
        )}
          <Input type="password"
          onChange={(e) =>{ 
          setPassword(e.target.value)
          clearPasswordError();}}
          />
          <span id="Text">Confirme sua senha</span>
            {error.passwordC && (
          <p style={{ color: "red", marginBottom: "10px" }}>{error.passwordC}</p>
        )}
          <Input type="password"
          onChange={(e) =>{ 
          setPasswordC(e.target.value)
          clearPasswordError();}}
          />
          <Button text="Entrar" type="auth" onClick={handleLogin}/>
          <span id="TextSignUp"><p>Você Já possui conta?</p><a href="/login">Faça o Login!</a></span> 
        </div>
        </div>
    )
}

export default SignUp