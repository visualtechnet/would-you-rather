import React, { PureComponent } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './Login'
import { Home, AddQuestion, Questions, Leaderboard } from './account'


const history = createBrowserHistory()

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
      	<Switch>      	  
          <Route exact component={Login} path="/login" />
          <Route exact component={Home} path="/account/home" />      	  
      	  <Route exact component={AddQuestion} path="/account/add" />
		  <Route component={Questions} path="/account/questions/:id" />
		  <Route component={AddQuestion} path="/account/questions/add" />
		  <Route component={Leaderboard} path="/account/leaderboard" />
		  <Route component={Login} path="/" />
      	</Switch>
      </Router>
    );
  }
}

export default App;
