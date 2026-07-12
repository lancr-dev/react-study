import '../styles/product-card.css';

function ProductCard({ name, stock, price, onBuy }) {
  return (
    <article className='product-card'>
      <h2>{name}</h2>

      <p className='stock'>
        Stock: <span>{stock}</span>
      </p>

      <p className='price'>
        ₱<span>{price}</span>
      </p>

      <button onClick={onBuy}>Buy Now</button>
    </article>
  );
}

export default ProductCard;
