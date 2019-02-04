import React, { Component } from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Navigation from './navigation';
import HomePage from './components/homepage'
import CartPage from './components/cartpage'
import Login from './components/login'
import ADDProduct from './features/product-listings/addProducts';
import Logout from './components/logout';
import GeoLocation from './components/geolocation';
import Footer from './components/footer';
import history from './history';
import MyAccount from './components/myaccout';

//const isAuthen = sessionStorage.getItem('token');

class App extends Component {

  render() {
    return (
      <div>
        <Router history={history}>
        <div>
          <div><Navigation /></div>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/cart' component={CartPage} />
              <Route exact path='/add' component={ADDProduct}/>
              <Route exact path='/login' component={Login} />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/geolocation' component={GeoLocation}/> 
              <Route exact path='/myaccount' component={MyAccount}/> 
            </Switch>
          </div>
          <div>
          <Footer/></div>
        </div>
        </Router>    
      </div>
    );
  }
}

export default App;
