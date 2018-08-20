import {
  GET_USERS,
  LOAD_USER
} from './../../constants/ActionTypes'
const settings = {
  user: {},
  users: []
}

export const login = (state = settings, action) => {
  	const { type, data } = action
    
	switch(type) {
      case GET_USERS: {
        const users = [];
        for (var user in data) {
        	users.push(data[user])
        }
        
      	return {
          ...state,
          users
        }
      }
      case LOAD_USER: {
        return {
        ...state,
         user: data
        }
      }
      default: {
        return state 
      }
    }
}