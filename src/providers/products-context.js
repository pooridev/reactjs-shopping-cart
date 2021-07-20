import { useCallback, useContext, useMemo, useState } from 'react';
import { createContext } from 'react';
import { commerce } from './../lib/commerce';

export const ProductsContext = createContext({
  products: null,

  fetchProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const fetchProducts = useCallback(async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }, []);

  const contextValue = useMemo(
    () => ({
      products,
      fetchProducts
    }),
    [products, fetchProducts]
  );

  return <ProductsContext.Provider children={children} value={contextValue} />;
};

export const useProducts = () => useContext(ProductsContext);
