import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homepage'
import CartPage from './components/cartpage'
import Login from './components/login'
const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact component={Login} />
    </Switch>
)

export default Router