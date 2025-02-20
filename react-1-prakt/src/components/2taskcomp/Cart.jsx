import React from 'react';

function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <h2>Krepšelio turinys</h2>
      {cartItems.length === 0 ? (
        <p>Krepšelis tuščias</p>
      ) : (
        cartItems.map(item => (
          <div key={item.cartItemId} style={{ borderBottom: '1px solid #ddd', padding: '4px 0' }}>
            <span>{item.name}</span>
            <button
              style={{ marginLeft: '8px' }}
              onClick={() => onRemoveFromCart(item.cartItemId)}
            >
              Pašalinti iš krepšelio
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
