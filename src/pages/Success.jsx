import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Success({ cart, clearCart }) {
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const itemCount = cart.length;

  // Clear cart on mount (or when leaving this page, but usually on mount is safer for the flow)
  useEffect(() => {
    return () => {
      clearCart();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h1>
        <p className="text-gray-500 mb-8">
          Thank you for your order. We have received your request via WhatsApp.
        </p>

        <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Order Summary</h3>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700">Items Count</span>
            <span className="font-medium text-gray-900">{itemCount}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-gray-200">
            <span className="font-bold text-gray-900">Total Amount</span>
            <span className="font-mono font-bold text-emerald-600">₹{totalAmount}</span>
          </div>
        </div>

        <Link 
          to="/" 
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
