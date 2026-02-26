import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Success from './pages/Success';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <HashRouter>
      <Routes>
        <Route 
          path="/" 
          element={<Shop cart={cart} addToCart={addToCart} />} 
        />
        <Route 
          path="/checkout" 
          element={<Checkout cart={cart} clearCart={clearCart} />} 
        />
        <Route 
          path="/success" 
          element={<Success cart={cart} clearCart={clearCart} />} 
        />
      </Routes>
    </HashRouter>
  );
}
