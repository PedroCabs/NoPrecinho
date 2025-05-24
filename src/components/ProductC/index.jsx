import "./style.css"

import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Button from "../Button"

function ProductC ({imgP, NameP, Price, Promo, id}){

  return(
    <div id="ProductC">
        <img src={imgP} alt="" />
        <p>{NameP}</p>
        <span id="ProductInfo">
        <strong className="Price">{Price}</strong>
        <strong className="Promo">{Promo}</strong>
        </span>
        <Link to={`/product/${id}`}>
         <Button text="comprar"/>
         </Link>
    </div>
  )
}

export default ProductC