import React, { PureComponent } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './Login'
import Home from './account/Home'
import Detail from './account/Detail'
import AddQuestion from './account/AddQuestion'

const history = createBrowserHistory()

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
      	<Switch>      	  
          <Route exact component={Login} path="/login" />
          <Route exact component={Home} path="/account/home" />
      	  <Route exact component={Detail} path="/account/detail/:id" />
      	  <Route exact component={AddQuestion} path="/account/add" />
		  <Route component={Login} path="/" />
      	</Switch>
      </Router>
    );
  }
}

export default App;
