import { GET_USERS } from './../../constants/ActionTypes'

const settings = {
	users: []
}

export const user = (state = settings, action) => {
	const { type, data } = action  
    
    switch(type) {
      case GET_USERS: {
      	return {
         ...state,
          users: data
        }
      }
      default: return state
    }
}