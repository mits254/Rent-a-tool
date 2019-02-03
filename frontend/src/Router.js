import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage'
import CartPage from './components/cartpage'
import Login from './components/login'
import ADDProduct from './features/product-listings/addProducts';
// import Search from './components/search';
const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        {/* <Route exact path='/add' component={ADDProduct}/> */}
        <Route exact path='/login' component={Login} />
       
    </Switch>
)

export default Router