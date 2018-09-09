import { SET_PAGE, HOMEPAGE } from '../../constants/ActionTypes'

const initialSettings = {
	currentPage: HOMEPAGE
}

export const navigation = (state = initialSettings, action) => {
	const { type, data } = action
    
    switch(type) {
      case SET_PAGE: {
    	return {
    		...state,
        	currentPage: data
    	}
      }
      default: {
      	return state
      }
    }
}
