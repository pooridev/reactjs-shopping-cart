import { useCallback, useContext, useMemo } from 'react';
import { createContext, useState } from 'react';
import { commerce } from './../lib/commerce';

export const CartContext = createContext({
  cart: {},

  fetchCart: () => {},

  handleUpdateCartQty: () => {},
  handleRemoveFromCart: () => {},
  handleEmptyCart: () => {},
  handleAddToCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  // for fetching cart after mounting
  const fetchCart = useCallback(async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }, []);

  // for adding and removing cart items
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const { cart } = await commerce.cart.update(lineItemId, { quantity });

    setCart(cart);
  };

  // for deleting specific item from the cart
  const handleRemoveFromCart = async lineItemId => {
    const { cart } = await commerce.cart.remove(lineItemId);

    setCart(cart);
  };

  // for emptying cart
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  // for adding one item at the time to the cart
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    
    setCart(cart);
  };

  const contextValue = useMemo(
    () => ({
      cart,
      fetchCart,
      handleUpdateCartQty,
      handleRemoveFromCart,
      handleEmptyCart,
      handleAddToCart
    }),
    [cart, fetchCart]
  );

  return <CartContext.Provider children={children} value={contextValue} />;
};

export const useCart = () => useContext(CartContext);
