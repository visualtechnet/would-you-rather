import React, { PureComponent } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './Login'
import Home from './account/Home'

const history = createBrowserHistory()

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
      	<Switch>
      	  <Route exact component={Login} path="/" />
          <Route component={Login} path="/login" />
          <Route component={Home} path="/account/home" />
      	</Switch>
      </Router>
    );
  }
}

export default App;
