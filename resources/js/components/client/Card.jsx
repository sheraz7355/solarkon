// Card component - reusable Bootstrap card wrapper
function Card({ children, className = '' }) {
  return <div className={`card card-hover ${className}`}>{children}</div>;
}

export default Card;

