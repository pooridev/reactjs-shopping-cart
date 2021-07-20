import { useCallback, useContext, useMemo, useState } from 'react';
import { createContext } from 'react';
import { commerce } from './../lib/commerce';

export const ProductsContext = createContext({
  isLoading: true,
  products: null,

  fetchProducts: () => {}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    setIsLoading(false);
  }, []);

  const contextValue = useMemo(
    () => ({
      isLoading,
      products,
      fetchProducts
    }),
    [products, fetchProducts, isLoading]
  );

  return <ProductsContext.Provider children={children} value={contextValue} />;
};

export const useProducts = () => useContext(ProductsContext);
