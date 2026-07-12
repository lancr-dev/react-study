import { useState } from 'react';

import ProductCard from '../components/ProductCard';
import BuyModal from '../components/BuyModal';

import '../styles/products.css';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
          <ProductCard
            name='Gaming Mouse'
            stock={25}
            price={1499}
            onBuy={() =>
              setSelectedProduct({
                name: 'Gaming Mouse',
                stock: 25,
                price: 1499,
              })
            }
          />

          <ProductCard
            name='Mechanical Keyboard'
            stock={12}
            price={3299}
            onBuy={() =>
              setSelectedProduct({
                name: 'Mechanical Keyboard',
                stock: 12,
                price: 3299,
              })
            }
          />

          <ProductCard
            name='Gaming Monitor'
            stock={8}
            price={12499}
            onBuy={() =>
              setSelectedProduct({
                name: 'Gaming Monitor',
                stock: 8,
                price: 12499,
              })
            }
          />

          <ProductCard
            name='Webcam HD'
            stock={30}
            price={2499}
            onBuy={() =>
              setSelectedProduct({
                name: 'Webcam HD',
                stock: 30,
                price: 2499,
              })
            }
          />

          <ProductCard
            name='Gaming Headset'
            stock={15}
            price={2799}
            onBuy={() =>
              setSelectedProduct({
                name: 'Gaming Headset',
                stock: 15,
                price: 2799,
              })
            }
          />

          <ProductCard
            name='USB Microphone'
            stock={5}
            price={3599}
            onBuy={() =>
              setSelectedProduct({
                name: 'USB Microphone',
                stock: 5,
                price: 3599,
              })
            }
          />
        </div>

        {selectedProduct && (
          <BuyModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </section>
    </main>
  );
}

export default Products;
