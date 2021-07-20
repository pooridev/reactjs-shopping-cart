import { Products, Navbar, Cart } from '../components/index';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Products />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
