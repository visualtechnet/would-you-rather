import { LOAD_LEADERBOARD } from './../../constants/ActionTypes'
import _ from 'lodash'

export function LoadLeaderboard (users, polls) {
	return function(dispatch) {
      	let allUsers = [];
        let allPolls = [];
      	let leaderboards = [];
      
      	for(var keyUser in users) {
        	allUsers.push(users[keyUser])
        }
      
      	for(var keyPoll in polls) {
        	allPolls.push(polls[keyPoll]);
        }
      
      	leaderboards = allUsers.map(user => {
          	let totalAsked = allPolls.filter(d => d.author === user.id).length;          	
          	let totalAnswered = allPolls.filter(d => d.optionOne.votes.indexOf(user.id) !== -1 || d.optionTwo.votes.indexOf(user.id) !== -1).length;                      	
          	
        	return {
            	name: user.name,
              	photo: user.avatarURL,
              	noOfQuestionsAsked: totalAsked,
              	noOfQuestionsAnswered: totalAnswered,
              	totalTally: totalAsked + totalAnswered
            }
        })	
           	
      	const sortedLeaderBoard = _.orderBy(leaderboards, ['totalTally'], 'desc');
      
    	dispatch({
        	type: LOAD_LEADERBOARD,
            data: sortedLeaderBoard
        });
    }
}