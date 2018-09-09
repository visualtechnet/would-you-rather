import { combineReducers } from 'redux'
import { login } from './login/reducer'
import { poll } from './poll/reducer'
import { user } from './user/reducer'
import { leaderboard } from './leaderboard/reducer'

const reducers = combineReducers({
	login,
 	poll,
  	user,
  	leaderboard
});

export default reducers;

