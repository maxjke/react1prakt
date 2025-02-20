import React from 'react';
import ProductList from './ProductList';

function ProductItem({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid gray', padding: '8px', marginBottom: '8px' }}>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={() => onAddToCart(product)}>
        Pridėti į krepšelį
      </button>
    </div>
  );
}

export default ProductItem;
