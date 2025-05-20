import "./style.css"

function Button({ img, text, type }) {
  return (<>
    {type === "auth" ?
      (<button className="auth-button">
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
