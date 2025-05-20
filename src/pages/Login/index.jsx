import "./style.css"

import Img_LS from "../../assets/Img_LS.svg"

import Input from "../../components/Input"
import Button from "../../components/Button"


function Login () {
    return(
        <div id="LoginContainer">
        <div id="ImgLS">
            <img src={Img_LS} alt="" />
        </div>
        <div id="LoginForm">
         <h2>Faça Login para continuar</h2>
         <span id="Text">E-mail</span>
         <Input type="e-mail"/>
         <span id="Text">Senha</span>
          <Input type="password"/>
          <Button text="Entrar" type="auth"/>
          <span id="Text">Você ainda não tem conta? <a href="/SignUp">Cadastre-se</a></span> 
        </div>
        </div>
    )
}

export default Login