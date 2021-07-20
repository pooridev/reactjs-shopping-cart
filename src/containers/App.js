import { Products, Navbar, Cart } from '../components/index';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from './../components/Spinner/index';
import { useProducts } from './../providers/products-context';
import { useEffect } from 'react';

function App() {
  const { isLoading, fetchProducts } = useProducts();

  const products = isLoading ? <Spinner /> : <Products />;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          {products}
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
