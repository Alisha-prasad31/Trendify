import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const { cartItems, products, currency, delivery_fee } = useContext(ShopContext);
  const [paymentMethod, setPaymentMethod] = useState('stripe');
  const navigate = useNavigate();

  // Calculate subtotal
  const cartData = [];
  for (const itemId in cartItems) {
    const itemSizes = cartItems[itemId];
    if (typeof itemSizes === 'object') {
      for (const size in itemSizes) {
        if (itemSizes[size] > 0) {
          cartData.push({
            _id: itemId,
            size,
            quantity: itemSizes[size],
          });
        }
      }
    }
  }

  const subtotal = cartData.reduce((total, item) => {
    const product = products.find(p => p._id === item._id);
    return product ? total + product.price * item.quantity : total;
  }, 0);

  const total = subtotal + delivery_fee;

  const handlePlaceOrder = () => {
    // You can validate form or store order data here
    navigate('/orders'); // ✅ Go to Order.jsx
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Delivery Info */}
      <div>
        <h2 className="text-xl font-bold mb-4 border-b pb-2">DELIVERY INFORMATION</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First name" className="border p-2 w-full" />
            <input type="text" placeholder="Last name" className="border p-2 w-full" />
          </div>
          <input type="email" placeholder="Email address" className="border p-2 w-full" />
          <input type="text" placeholder="Street" className="border p-2 w-full" />
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="City" className="border p-2 w-full" />
            <input type="text" placeholder="State" className="border p-2 w-full" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Zipcode" className="border p-2 w-full" />
            <input type="text" placeholder="Country" className="border p-2 w-full" />
          </div>
          <input type="tel" placeholder="Phone" className="border p-2 w-full" />
        </form>
      </div>

      {/* Cart Totals and Payment */}
      <div>
        <h2 className="text-xl font-bold mb-4 border-b pb-2">CART TOTALS</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{currency}{subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Fee</span>
            <span>{currency}{delivery_fee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold border-t pt-2">
            <span>Total</span>
            <span>{currency}{total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Method */}
        <h3 className="mt-6 mb-2 font-semibold border-b pb-1">PAYMENT METHOD</h3>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="stripe"
              checked={paymentMethod === 'stripe'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src={assets.stripe_logo} alt="Stripe" className="w-8 h-8" />
            <span className="text-sm">Stripe</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="razorpay"
              checked={paymentMethod === 'razorpay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <img src={assets.razorpay_logo} alt="Razorpay" className="w-8 h-8" />
            <span className="text-sm">Razorpay</span>
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="text-sm">Cash on Delivery</span>
          </label>
        </div>

        {/* Place Order Button */}
        <button
          onClick={handlePlaceOrder}
          className="mt-6 bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
