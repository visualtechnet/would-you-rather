import { LOAD_LEADERBOARD } from './../../constants/ActionTypes'

const settings = {
	leaderboardList: []
}

export const leaderboard = (state = settings, action) => {
	const { type, data } = action
    
    switch (type) {
      case LOAD_LEADERBOARD: {
      	return {
        	...state,
          leaderboardList: data
        }        
      }
      default: {
      	return state
      }
    }
}