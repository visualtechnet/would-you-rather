import React, { PureComponent } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Login from './Login'
import { Home, AddQuestion, Questions, Leaderboard } from './account'
import PageNotFound from './PageNotFound'
import { connect } from 'react-redux'
import _ from 'lodash'

const history = createBrowserHistory()

class App extends PureComponent {
  constructor(props){
  	super(props)
    
    if(!props.currentLoginUser || _.isEmpty(props.currentLoginUser)) {
    	window.location = '/login';
    }    
  }
  
  render() {
    return (
      <Router history={history}>
      	<Switch>      	  
		  <Route exact component={Home} path="/" />      	  
		  <Route exact component={Home} path="/account/home" />      	  
          <Route exact component={Login} path="/login" />          
      	  <Route exact component={AddQuestion} path="/account/add" />
		  <Route exact component={Questions} path="/account/questions/:id" />
		  <Route exact component={AddQuestion} path="/account/questions/add" />
		  <Route exact component={Leaderboard} path="/account/leaderboard" />
		  <Route exact component={PageNotFound} path="/page-not-found" />
		  <Route component={Login} />
      	</Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
	currentLoginUser: state.login.user
})

App = connect(mapStateToProps)(App)

export default App;
