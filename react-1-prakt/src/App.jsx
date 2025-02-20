import { useState } from 'react'
import './App.css'
import Cart from './components/2taskcomp/Cart';
import ProductList from './components/2taskcomp/ProductList';
import GuessGame from './components/3taskcomp/GuessGame';


function App() {
   
   
  const [cart, setCart] = useState([]);
  const [nextCartItemId, setNextCartItemId] = useState(1);

  
  const handleAddToCart = (product) => {
    
    const newCartItem = { ...product, cartItemId: nextCartItemId };
    setNextCartItemId(prev => prev + 1);
    setCart(prevCart => [...prevCart, newCartItem]);
  };

  
  const handleRemoveFromCart = (cartItemId) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };

   return (
    <div style={{ padding: '16px' }}>
      <h1>Pirkinių krepšelio sistema</h1>
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
    // <>{/* <TaskList/> */}</>
    // <div style={{ padding: '16px' }}>
    //   <h1>Skaičių spėjimo žaidimas</h1>
    //   <GuessGame/>
    // </div>
   );
}

export default App;
