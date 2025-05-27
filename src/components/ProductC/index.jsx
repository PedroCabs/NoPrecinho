import "./style.css"

import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../Button"

function ProductC ({imgP, NameP, Price, id}){

  return(
    <div id="ProductC">
        <img src={imgP || null} alt="" />
        <p>{NameP}</p>
        <span id="ProductInfo">
        <strong className="Price">{Price}</strong>
        </span>
        <Link to={`/product/${id}`}>
         <Button text="comprar"/>
         </Link>
    </div>
  )
}

export default ProductC