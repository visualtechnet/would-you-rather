import React, { PureComponent } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './Login'
import { Home, AddQuestion, Questions, Leaderboard } from './account'
import { PrivateRoute } from '../components'
import PageNotFoundWithRouter from './PageNotFound'

const history = createBrowserHistory()

class App extends PureComponent {      
  render() {
    return (
      <Router history={history}>
      	<Switch>      	  
		  <Route exact component={Home} path="/" />      	  
		  <PrivateRoute exact component={Home} path="/home" />      	  
          <Route exact component={Login} path="/login" />          
      	  <PrivateRoute exact component={AddQuestion} path="/add" />
		  <PrivateRoute exact component={Questions} path="/questions/:id" />
		  <PrivateRoute exact component={AddQuestion} path="/questions/add" />
		  <PrivateRoute exact component={Leaderboard} path="/leaderboard" />
		  <Route exact component={PageNotFoundWithRouter} path="/page-not-found" />
		  <Route component={Login} />
      	</Switch>
      </Router>
    );
  }
}

export default App;
