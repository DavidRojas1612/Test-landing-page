import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Login from '../Pages/Login';
import Products from '../Pages/Privates/Products';
import Product from '../Pages/Privates/Product';
const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to='/login' />
    }
  />
)

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to='/products' />
    }
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PublicRoute path='/' authed={authed} exact component={Dashboard} />
    <PublicRoute path='/login' authed={authed} exact component={Login} />
    <PrivateRoute
      exact
      path='/products'
      authed={authed}
      component={Products}
    />
    <PrivateRoute
      authed={authed}
      exact
      path='/products/:id'
      component={Product}
    />
  </Switch>
)

export default Routes

