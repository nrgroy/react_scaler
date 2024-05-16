import './ProductCard.css';
function ProductCard({ name, price }) {
  return (
    <div className="card">
      <div>
        {name}
      </div>
      <div>
        {price}
      </div>
    </div>
  )
}

export default ProductCard;