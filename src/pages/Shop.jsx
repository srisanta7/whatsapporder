import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ShoppingCart } from 'lucide-react';

export default function Shop({ cart, addToCart }) {
  const cartCount = cart.length;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">TechStore</h1>
            <p className="text-gray-500 mt-1">Premium gadgets for your lifestyle</p>
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-900">{cartCount} items</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>

        {cartCount > 0 && (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center px-4 pointer-events-none">
            <Link 
              to="/checkout" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 pointer-events-auto flex items-center gap-2"
            >
              Order Now ({cartCount} items)
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
