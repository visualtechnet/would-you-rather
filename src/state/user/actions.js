import { _getUsers } from '../../data/_DATA'
import { GET_USERS } from './../../constants/ActionTypes'

export function getUsers() {
 	return async function(dispatch) 
    {
    	return await _getUsers().then(result => {
        	dispatch({
              type: GET_USERS,
              data: result
            });
        });
    } 
}