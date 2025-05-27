import "./style.css"

import Button from "../Button"
import Input from "../Input"

import Store_logo from "../../assets/Store_logo.svg"
import Banana_icon from "../../assets/Banana_icon.svg"
import User_icon from "../../assets/User_icon.svg"
import {  useState } from "react"

function Header () {
    const [search, setSearch] = useState("")
    // const searchRef = useRef(null)
    
    const handleChange = (e) => {
        const res = e.target.value
        setSearch(res)
    }

    const handleClick = () => {
        if (window.location.href !== "http://localhost:5173/search") {
            window.location.href = "/search"
        } 
    }

    return(
     <header id="Header">
        <div id="Logo-Input">
       <a href="/"><img src={Store_logo} alt="" /></a>
       <div>

       <div id="pesquisar"> 
        <input type="text" onChange={handleChange} placeholder="pesquisar" value={search} />
        <button onClick={handleClick}>IR</button>
       </div>
       </div>
       </div>
       <div id="Buttons">
        <Button img={Banana_icon} text="A preço de Banana" color=" background-color: #FFA726;"/>
       <a id="Loginbtnm" href="/login"><Button img={User_icon}  text="Entrar  >"  color=" background-color: #FFA726;"/></a> 
        </div>
     </header>
    )
}

export default Header