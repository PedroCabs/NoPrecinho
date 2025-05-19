import "./style.css"

import Header from "../../components/Header"
import ProductC from "../../components/ProductC"

import Bauducco_img from "../../assets/Bauducco_img.svg"

function Search (){
    return(
        <div>
          <Header/>
          <div id="SearchContainer">
            <h2>Você buscou por: Bauducco</h2>

            <div id="Search-result">
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>  
             </div>

             <h2>Produtos semelhantes</h2>
                         <div id="Search-result">
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>
             <ProductC imgP={Bauducco_img} NameP="Chocotone Bauducco" Price="R$33,49" Promo="Leve 2 é pague R$57,50"/>  
             </div>

          </div>
        </div>
    )
}

export default Search