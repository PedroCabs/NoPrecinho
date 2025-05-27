import "./style.css"
import { useEffect, useState } from "react"
import Button from "../../components/Button"
import ProductC from "../../components/ProductC"
import Store_logo from "../../assets/Store_logo.svg"
import Banana_icon from "../../assets/Banana_icon.svg"
import User_icon from "../../assets/User_icon.svg"

function Search() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    const res = e.target.value
    setSearch(res)
  }

  const getProducts = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/scrape?keyword=${search}`)
      const data = await response.json()  // Ensure you're parsing the JSON correctly

      // Check if the data is an array before setting the state
      if (Array.isArray(data)) {
        setProducts(data)
        console.log(data);
        
      } else {
        throw new Error("Invalid data format")
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error("Error fetching products:", error)
    }
  }

  const handleClick = () => {
    setLoading(true)
    if (search.length === 0) {
      alert("escreva algo")
      return
    }

    // Save search term to localStorage
    localStorage.setItem("search", JSON.stringify(search))

    // Redirect to the search page
    if (window.location.href !== "http://localhost:5173/search") {
      window.location.href = "/search"
    }

    // Fetch products
    getProducts()
  }

  useEffect(() => {
    const searchVal = JSON.parse(localStorage.getItem("search"))
    if (searchVal) {
      
      setSearch(searchVal || "")
      if (searchVal !== "") {
        getProducts()  // Fetch products when the page loads

      }
    }
  }, [])

  return (
    <div>
      <header id="Header">
        <div id="Logo-Input">
          <a href="/"><img src={Store_logo} alt="Store Logo" /></a>
          <div>
            <div id="pesquisar">
              <input type="text" onChange={handleChange} placeholder="pesquisar" value={search} />
              <button onClick={handleClick}>IR</button>
            </div>
          </div>
        </div>
        <div id="Buttons">
          <Button img={Banana_icon} text="A preço de Banana" className="button-orange" />
          <a id="Loginbtnm" href="/login"><Button img={User_icon} text="Entrar  >" className="button-orange" /></a>
        </div>
      </header>
      <div id="SearchContainer">
        <h2>Você buscou por: {search}</h2>

        <div id="Search-result">
          
          {products ?
            (products.map((prod) => (
              <ProductC
                key={prod.id}
                imgP={prod.img}
                NameP={prod.title}
                Price={prod.price}
              />
            ))
          ) : (<p>Nada aqui</p>)}
        </div>
      </div>
      {loading &&
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="loading" />
      }
    </div>
  )
}

export default Search
