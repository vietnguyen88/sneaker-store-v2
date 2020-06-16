import React, { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
// import Men from './pages/Men'
// import Women from './pages/Women'
import Dashboard from './pages/Dashboard'
import ProductDetail from './components/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import CartContext from './components/CartContext';
import Cart from './components/Cart';
import Filter from './components/Filter'

function App() {
  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/men' >
              <Filter gender='men' />
            </Route>
            <Route path='/women' >
              <Filter gender='women' />
            </Route>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/product/:id' component={ProductDetail} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/cart' component={Cart} />
          </Switch>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
