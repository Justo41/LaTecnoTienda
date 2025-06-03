// App.jsx
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const showCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar 
        count={cartItems.length} 
        showCart={showCart} 
        isCartOpen={isCartOpen} 
        cartItems={cartItems} 
        clearCart={clearCart}
      />
      <Cards addToCart={addToCart} />
    </>
  );
}

export default App;
