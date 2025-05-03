import React, { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '₹';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  
  

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please select a size before adding to cart!');
      return;
    }

    let cartData = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (!cartData[itemId][size]) {
      cartData[itemId][size] = 0;
    }

    cartData[itemId][size] += 1;

    setCartItems(cartData);
    toast.success('Item added to cart!');
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const item in cartItems) {
      if (cartItems[item] && typeof cartItems[item] === 'object') {
        for (const size in cartItems[item]) {
          totalCount += cartItems[item][size];
        }
      }
    }

    return totalCount;
  };

  const removeFromCart = (itemId, size) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId][size]) {
      cartData[itemId][size] -= 1;
      if (cartData[itemId][size] <= 0) {
        delete cartData[itemId][size];
      }

      if (Object.keys(cartData[itemId]).length === 0) {
        delete cartData[itemId];
      }

      setCartItems(cartData);
      toast.info("Item removed from cart");
    }
  };

  const clearCart = () => {
    setCartItems({});
    toast.info("Cart cleared");
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    removeFromCart,
    clearCart
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
