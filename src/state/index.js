import { combineReducers } from 'redux'
import { login } from './login/reducer'
import { add } from './add/reducer'
import { poll } from './poll/reducer'

const reducers = combineReducers({
	add,
	login,
 	poll
});

export default reducers;

