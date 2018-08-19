import { combineReducers } from 'redux'
import { login } from './login/reducer'
import { add } from './add/reducer'
import { detail } from './detail/reducer'
import { home } from './detail/reducer'

const reducers = combineReducers({
	add,
	login,
 	detail,
  	home
});

export default reducers;

