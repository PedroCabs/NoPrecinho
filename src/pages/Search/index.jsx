import "./style.css"
import { Products } from "../../utils/products"

import Header from "../../components/Header"
import ProductC from "../../components/ProductC"

import Bauducco_img from "../../assets/Bauducco_img.svg"

function Search() {
  return (
    <div>
      <Header />
      <div id="SearchContainer">
        <h2>Você buscou por: Bauducco</h2>

        <div id="Search-result">
          {products?.map((prod) => {
            return (
              <ProductC
                imgP={prod.img}
                NameP={prod.title}
                Price="R$33,49"
                Promo="Leve 2 é pague R$57,50"
              />
            )
          })}
        </div>

        {/* <h2>Produtos semelhantes</h2>
                         <div id="Search-result">
          {Products.map((produto, index) => (
        <ProductC
          key={index}
          NameP={produto.name}
          Price={produto.price}
          Promo={produto.promo}
          imgP={Object.values(produto.img)[0]} // Pegando o valor do objeto img
        />
             </div>
      ))} */}
      </div>
    </div>
  )
}

export default Search
