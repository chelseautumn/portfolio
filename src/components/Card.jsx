import "../styles/Card.css";

function Card({ title, gridArea, height, minHeight, width, children }) {
  return (
    <div style={{ gridArea, minHeight, width, height }} className="card">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </div>
  );
}

export default Card;
