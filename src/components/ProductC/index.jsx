import "./style.css"

import Button from "../Button"

function ProductC ({imgP, NameP, Price, Promo}){
  return(
    <div id="ProductC">
        <img src={imgP} alt="" />
        <p>{NameP}</p>
        <span>
        <strong className="Price">{Price}</strong>
        <strong className="Promo">{Promo}</strong>
        </span>
         <Button text="comprar"/>
    </div>
  )
}

export default ProductC