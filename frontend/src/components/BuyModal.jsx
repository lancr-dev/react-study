import '../styles/buy-modal.css';

function BuyModal({ product, onClose }) {
  return (
    <div className='modal-overlay'>
      <div className='buy-modal'>
        <h2>Sample Checkout</h2>

        <p>
          <strong>Product:</strong> {product.name}
        </p>

        <p>
          <strong>Price:</strong> ₱{product.price}
        </p>

        <form>
          <label>
            Full Name
            <input type='text' placeholder='Enter your name' />
          </label>

          <label>
            Card Number
            <input type='text' placeholder='1234 5678 9012 3456' />
          </label>

          <label>
            Expiration Date
            <input type='month' />
          </label>

          <button type='button'>Pay Now</button>

          <button type='button' className='close-btn' onClick={onClose}>
            Close
          </button>
        </form>
      </div>
    </div>
  );
}

export default BuyModal;
