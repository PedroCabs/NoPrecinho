import Button from "../Button"
import "./style.css"

function Input ({type,placeholder, onChange}){
    return(
       <>{type === "text" ? ( <input id="InputText" type={type} placeholder={placeholder} onChange={onChange}/>):
       (<input className="InputForm" type={type} placeholder={placeholder} onChange={onChange}  />)}</>
    )
}

export default Input