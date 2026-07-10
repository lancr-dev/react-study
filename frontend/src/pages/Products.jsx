import ProductCard from '../components/ProductCard';
import '../styles/products.css';

function Products() {
  return (
    <main>
      <section className='products'>
        <div className='products-header'>
          <h1>Products</h1>

          <p>
            Browse our sample products built with reusable React components.
          </p>
        </div>

        <div className='products-grid'>
          <ProductCard name='Gaming Mouse' stock={25} price={1499} />

          <ProductCard name='Mechanical Keyboard' stock={12} price={3299} />

          <ProductCard name='Gaming Monitor' stock={8} price={12499} />

          <ProductCard name='Webcam HD' stock={30} price={2499} />

          <ProductCard name='Gaming Headset' stock={15} price={2799} />

          <ProductCard name='USB Microphone' stock={5} price={3599} />
        </div>
      </section>
    </main>
  );
}

export default Products;
