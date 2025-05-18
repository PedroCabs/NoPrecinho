import "./style.css"

function Adverstising ({title,text,img1,img2}){
    return(
       <div id="Advertising">
        <div id="Pinfo">
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={img1} alt="" />
        </div>
        <img src={img2} alt="" />
       </div>
    )
}

export default Adverstising