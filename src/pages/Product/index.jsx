import "./style.css"
import { useLocation, useParams } from "react-router-dom";

import Header from "../../components/Header"
import Button from "../../components/Button"
import ProductC from "../../components/ProductC"
import { Products } from '../../utils/products';

import Plus_icon from "../../assets/Plus_icon.svg"
import Minus_icon from "../../assets/Minus_icon.svg"
import Salsicha_img from "../../assets/Salsicha_img.svg"
import { useState } from "react";


function Product(){
  const {id} = useParams();
  const produto = Products[id]
   const [Value, setValue] = useState(0)

   if (!produto) {
    return <h2>Produto não encontrado!</h2>;
  }

    return(
        <div>
            <Header/>
            <div id="ProductContainer">
                <div id="ProductsDetails">
                <h2>{produto.name}</h2>
                 <div id="ProductInfo2">
                <img id="SalsImg" src={Object.values(produto.img)[0]} alt="" />
                <div id="ProductForm">
                <div id="Label">
                  <span id="PricePr2"><strong>{produto.price}</strong></span>
                  <p>Vendido por Rogerio's Store</p>
                </div>
                  <p><strong>Descrição:</strong> Salsicha defumada deliciosa. Feita para toda a familia. </p>
                  <div id="Purchase">
                  <div id="Amount">
                  <button id="PlusIcon" onClick={() => setValue(Value - 1)}><img src={Minus_icon} alt="" /></button>
                  <span id="AmountNumb">{Value}</span>
                  <button id="MinusIcon" onClick={() => setValue(Value + 1)}><img src={Plus_icon} alt="" /></button>
                  </div>
                  <Button text="Comprar"/>
                  </div>
                  </div>
                  </div>

                <div id="Similar-Products">
                  <h2><strong>Produtos Semelhantes:</strong></h2>
                  <div id="Product-similar">
                 {Products.map((produto, index) => (
        <ProductC
          id={index}
          NameP={produto.name}
          Price={produto.price}
          Promo={produto.promo}
          imgP={Object.values(produto.img)[0]} // Pegando o valor do objeto img
        />
        
      ))}
                  </div>
                </div>
                </div>

              
            </div>
          
        </div>
    )
  }
  

export default Product