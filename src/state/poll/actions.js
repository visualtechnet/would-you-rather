import { _getQuestions } from '../../data/_DATA'
import { 
  GET_POLLS,
  GET_CATEGORY_POLLS,
  SET_POLL_QUESTION,
  SAVE_POLL_ANSWER,
  ADD_POLL_QUESTION,
  SORT_POLL
} from './../../constants/ActionTypes'
import _ from 'lodash'

export function getPolls() {
	return async function(dispatch) {
	   return await _getQuestions().then((result) => { 
         const sortedPoll = _.orderBy(result, 'timestamp', 'desc')
         
       	dispatch({
        	type: GET_POLLS,
          	data: sortedPoll
        })
       });
    }
}

export function getCategoryPolls(user, allUsers) {
	return function(dispatch) {
      	      
    	dispatch({
        	type: GET_CATEGORY_POLLS,
          	data: user,
          	allUsers
        });
    }    
}

export function setPollQuestion(poll) {
	return function(dispatch) {
      dispatch({
        type: SET_POLL_QUESTION,
        data: poll
      });
    }
}

export function savePollAnswer(currentPoll, polls){
	return function(dispatch) {              
    	dispatch({
          type: SAVE_POLL_ANSWER,
          data: currentPoll,
          polls
        })      
    }
}

export function AddPollQuestion(poll) {
	return function(dispatch) {
    	dispatch({
        	type: ADD_POLL_QUESTION,
          	data: poll
        });
    }
}

export function sortPoll(polls) {
	return function(dispatch) {
      	const sortedPoll = _.orderBy(polls, 'timestamp', 'desc')
    	dispatch({
          type: SORT_POLL,
          data: sortedPoll
        })
    }
}