import "./style.css"

import User_icon from "../../assets/User_icon.svg"



function RegionStore ({StoreName, sale}){
  return(
    <div id="RegionStore">
      <img src={User_icon} alt="" />
      <span>{StoreName}</span>
      <span><strong>{sale}</strong></span>
      <a href="">Ver Mais</a>
    </div>
  )
}

export default RegionStore