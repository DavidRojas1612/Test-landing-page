import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? <Component {...props} /> : <Redirect to='/' />
    }
  />
)

const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === false ? <Component {...props} /> : <Redirect to='/dashboard' />
    }
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PublicRoute path='/' authed={authed} exact component={Dashboard} />

    {/* <PrivateRoute authed={authed} exact path='/' component={Customers} />
    <PrivateRoute
      authed={authed}
      exact
      path='/cliente/nuevo'
      component={NewCustomerPage}
    />
    <PrivateRoute
      authed={authed}
      exact
      path='/cliente/editar/:id'
      component={EditCustomerPage}
    /> */}
  </Switch>
)

export default Routes

/*
    <PublicRoute path='/' authed={authed} exact component={Customers} />
    <PrivateRoute
      authed={authed}
      exact
      path='/dashboard'
      component={Dashboard}
    />
    <PrivateRoute
      exact
      path='/cliente/editar/:id'
      authed={authed}
      component={Theme}
    />

*/
