import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  const BUSINESS_NUMBER = "918249998525";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      alert("Please fill in all details");
      return;
    }

    // Format items list
    const itemsList = cart.map(item => `${item.name} - ₹${item.price}`).join('\n');

    // Construct message
    const message = `New Order Received

Customer Name: ${formData.name}
Phone: ${formData.phone}

Items:
${itemsList}

Total Amount: ₹${totalAmount}`;

    // Encode message
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${BUSINESS_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Redirect to success page
    navigate('/success');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Add some products to get started.</p>
          <Link to="/" className="text-indigo-600 font-medium hover:text-indigo-800">
            Go back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Shop
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Checkout</h2>
            
            <div className="space-y-4 mb-8">
              {cart.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex justify-between items-center py-2">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="font-mono font-medium text-gray-900">₹{item.price}</span>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                <span className="font-bold text-lg text-gray-900">Total</span>
                <span className="font-mono font-bold text-xl text-emerald-600">₹{totalAmount}</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray-50/50">
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                type="submit"
                disabled={!formData.name || !formData.phone}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] mt-4"
              >
                Place Order via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
