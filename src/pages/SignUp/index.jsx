import "./style.css"

import Img_LS from "../../assets/Img_LS.svg"

import Input from "../../components/Input"
import Button from "../../components/Button"


function SignUp () {
    return(
        <div id="SignUpContainer">
        <div id="ImgLS">
            <img src={Img_LS} alt="" />
        </div>
        <div id="SignUpForm">
         <h2>Faça seu Cadastro para continuar</h2>
         <span id="Text">E-mail</span>
         <Input type="e-mail"/>
         <span id="Text">Senha</span>
          <Input type="password"/>
          <span id="Text">Confirme sua senha</span>
          <Input type="password"/>
          <Button text="Entrar" type="auth"/>
          <span id="Text">Você Já possui conta? <a href="/login">Faça o Login!</a></span> 
        </div>
        </div>
    )
}

export default SignUp