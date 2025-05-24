import "./style.css"

function Button({ img, text, type, onClick}) {
  return (<>
    {type === "auth" ?
      (<button className="auth-button" onClick={onClick}>
        {img && <img src={img} alt="ícone" />}
        <strong>{text}</strong>
      </button>) : (<button className="custom-button">
        {img && <img src={img} alt="ícone" />}
        <strong>{text}</strong>
      </button>)
    }

  </>
  );
}

export default Button;
