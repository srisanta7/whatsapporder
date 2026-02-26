import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-sans font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-mono text-lg font-bold text-emerald-600">₹{product.price}</span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
