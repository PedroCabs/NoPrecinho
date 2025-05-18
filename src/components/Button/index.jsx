import "./style.css"

function Button({ text, img }) {
  return (
    <button className="custom-button">
      {img && <img src={img} alt="ícone" />}
      <strong>{text}</strong>
    </button>
  );
}

export default Button;
