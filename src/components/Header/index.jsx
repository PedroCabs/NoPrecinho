import "./style.css"

import Button from "../Button"
import Input from "../Input"

import Store_logo from "../../assets/Store_logo.svg"
import Banana_icon from "../../assets/Banana_icon.svg"
import User_icon from "../../assets/User_icon.svg"

function Header () {
    return(
     <header id="Header">
        <div id="Logo-Input">
       <a href="/"><img src={Store_logo} alt="" /></a>
       <Input type="text" placeholder="Digite sua Busca"/>
       </div>
       <div id="Buttons">
        <Button img={Banana_icon} text="A preço de Banana" color=" background-color: #FFA726;"/>
        <Button img={User_icon} text="Entrar    >"  color=" background-color: #FFA726;"/>
        </div>
     </header>
    )
}

export default Header