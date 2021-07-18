import { useEffect, useState } from 'react';
import { Products, Navbar } from './components/index';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className='App'>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToProduct={handleAddToCart} />
    </div>
  );
}

export default App;
