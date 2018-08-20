import { _getQuestions } from '../../data/_DATA'
import { 
  GET_POLLS,
  GET_CATEGORY_POLLS
} from './../../constants/ActionTypes'

export function getPolls() {
	return async function(dispatch) {
	   return await _getQuestions().then((result) => {
       	dispatch({
        	type: GET_POLLS,
          	data: result
        })
       });
    }
}

export function getCategoryPolls(user) {
	return function(dispatch) {
    	return dispatch({
        	type: GET_CATEGORY_POLLS,
          	data: user
        });
    }    
}