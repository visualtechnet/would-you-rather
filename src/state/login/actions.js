import { allUsers } from 'data/_DATA'
import { GET_USERS, LOAD_USER } from 'constants/ActionTypes'

export function getUsers () {  
	return function(dispatch) {      
      return dispatch({ 
        type: GET_USERS, 
        data: allUsers() })      
    }
}

export function loadUser (user) {
	return function(dispatch) {
    	return dispatch({ 
          type: LOAD_USER,
          data: user
        })
    }
}