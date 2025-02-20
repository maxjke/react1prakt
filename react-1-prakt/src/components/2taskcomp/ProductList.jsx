import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Cart from './Cart';

function ProductList({ onAddToCart }) {
  
  const [products] = useState([
    { id: 1, name: 'Produktas 1', description: 'Pirmojo produkto aprašymas' },
    { id: 2, name: 'Produktas 2', description: 'Antrojo produkto aprašymas' },
    { id: 3, name: 'Produktas 3', description: 'Trečiojo produkto aprašymas' },
  ]);

  return (
    <div>
      <h2>Produktų sąrašas</h2>
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductList;
