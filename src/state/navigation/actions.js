import { SET_PAGE } from '../../constants/ActionTypes'

export function loadPage (index) {
	return function(dispatch) {
    	dispatch({
        	type: SET_PAGE,
          	data: index
        });
    }
}