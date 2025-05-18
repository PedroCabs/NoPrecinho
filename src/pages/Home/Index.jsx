import { useState } from 'react'
import './style.css'

import Americanas_logo from "../../assets/Americanas_logo.png"
import Product_img from "../../assets/Product_img.svg"
import Product_img2 from "../../assets/Product_img1.svg"

import Header from "../../components/Header"
import Adverstising from '../../components/Advertising'
import RegionStore from '../../components/RegionStore'
import ProductC from '../../components/ProductC'

function Home() {


  return (
    <div id="Home">
      <Header/>
      <Adverstising
      title="Kit Kat Cereal"
      text="Caixa contendo 900g de um cereal sabor waffer delicioso!"
      img1={Americanas_logo}
      img2={Product_img}
      />

      <div id='Stores'>
       <strong>Lojas da Sua Região:</strong>
       <div id='stores'>
       <RegionStore
       StoreName="Mercearia Nova Era"
       sale="3 promoções"
       /> <RegionStore
       StoreName="Mercearia Nova Era"
       sale="3 promoções"
       />
       <RegionStore
       StoreName="Mercearia Nova Era"
       sale="3 promoções"
       />
       <RegionStore
       StoreName="Mercearia Nova Era"
       sale="3 promoções"
       />
       </div>
      </div>

      <div id='Sales'>
       <strong>Promoções Rapidas:</strong>
       <div id='sales'>
      <ProductC 
       imgP={Product_img2}
       NameP="Salsicha Perdigão 5Kg"
       Price="R$13,49"
       Promo="Leve 2 é pague R$23,50"
      />
           <ProductC 
       imgP={Product_img2}
       NameP="Salsicha Perdigão 5Kg"
       Price="R$13,49"
       Promo="Leve 2 é pague R$23,50"
      />
     <ProductC 
       imgP={Product_img2}
       NameP="Salsicha Perdigão 5Kg"
       Price="R$13,49"
       Promo="Leve 2 é pague R$23,50"
      />
       <ProductC 
       imgP={Product_img2}
       NameP="Salsicha Perdigão 5Kg"
       Price="R$13,49"
       Promo="Leve 2 é pague R$23,50"
      />
</div>

      </div>

    </div>
  )
}

export default Home
