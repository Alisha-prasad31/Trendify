import { ShopContext } from '../context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, currency, cartItems, removeFromCart } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      const itemSizes = cartItems[itemId];
      if (typeof itemSizes === 'object') {
        for (const size in itemSizes) {
          if (itemSizes[size] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
              quantity: itemSizes[size],
            });
          }
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handlePlaceOrder = () => {
    navigate('/place-order'); // ✅ Go to PlaceOrder.jsx
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartData.map((item) => {
              const product = products.find(p => p._id === item._id);
              if (!product) return null;

              return (
                <li key={`${item._id}-${item.size}`} className="flex items-center gap-4 border-b pb-4">
                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{product.name}</h2>
                    <p className="text-sm">Size: {item.size}</p>
                    <p className="text-sm">Quantity: {item.quantity}</p>
                    <p className="text-sm font-semibold">
                      Price: {currency}{(product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item._id, item.size)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Total Price */}
          <div className="mt-6 text-xl font-semibold">
            Total: {currency}{cartData.reduce((total, item) => {
              const product = products.find(p => p._id === item._id);
              return product ? total + (product.price * item.quantity) : total;
            }, 0).toFixed(2)}
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
