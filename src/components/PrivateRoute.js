import React, { PureComponent } from "react";
import {  
  Route,  
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash'

class PrivateRoute extends PureComponent {
  	render() {      
      const { component: Component, ...rest } = this.props      
      const { authUser, history } = this.props
      const isAuth = authUser !== undefined && _.isEmpty(authUser) === false ? true : false
      const isHash = history.location.hash.length > 0 && history.location.hash === "#/"
                  
      return (
          <Route
            {...rest}
            render={props =>
              isAuth && !isHash ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: props.location }
                  }}
                />
              )
            }
          />)
	}
}

const mapStateToProps = state => ({
	authUser: state.login.user
})

PrivateRoute = connect(mapStateToProps)(withRouter(PrivateRoute));

export { PrivateRoute }