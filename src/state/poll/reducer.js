import { 
  GET_POLLS,
  GET_CATEGORY_POLLS,
  SET_POLL_QUESTION,
  SAVE_POLL_ANSWER,
  ADD_POLL_QUESTION,
  SORT_POLL
} from './../../constants/ActionTypes'

import _ from 'lodash'

const settings = {
	polls: [],
  	selectedPoll: {},
    unansweredPolls: [],
    answeredPolls: []
}

export const poll = (state = settings, action) => {
  const { type, data, allUsers, polls } = action
  
  switch(type) {
    case GET_POLLS: {
        const polls = []
        
        for(var key in data) {
        	polls.push(data[key]);	
        }
      	      
      	const mappedPolls = polls.map(poll => {
        	return {
            	...poll,
              	createdDate: new Date(poll.timestamp)
            }
        })
      	const sortedPolls = _.orderBy(mappedPolls, 'createdDate', 'desc')
      	      
    	return { 
          ...state,
          polls: sortedPolls
        }
    }
    case GET_CATEGORY_POLLS: {
      const currentUser = data;
      const allPolls = state.polls;	  
      const unansweredPolls = allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) === undefined && poll.optionTwo.votes.find(user => user===currentUser) === undefined)
      const answeredPolls = allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) !== undefined || poll.optionTwo.votes.find(user => user===currentUser) !== undefined)
                  
      const userAnswerWithPhoto = answeredPolls.map((answerWithUser) => {            
        const currentAvatar = allUsers[answerWithUser.author] && allUsers[answerWithUser.author].avatarURL
        const currentName = allUsers[answerWithUser.author] && allUsers[answerWithUser.author].name
        
      	return {
          ...answerWithUser,
          name: currentName,
          photo: currentAvatar,
          createdDate: new Date(answerWithUser.timestamp)
        }
      });
      
      const userUnanswerWithPhoto = unansweredPolls.map((unanswerWithUser) => {        
      	const currentAvatar = allUsers[unanswerWithUser.author] && allUsers[unanswerWithUser.author].avatarURL
        const currentName = allUsers[unanswerWithUser.author] && allUsers[unanswerWithUser.author].name

        return {
          	...unanswerWithUser,
          	name: currentName,
        	photo: currentAvatar,
          	createdDate: new Date(unanswerWithUser.timestamp)
        }
      });           
      
      const sortedAnswered = _.orderBy(userAnswerWithPhoto, 'createdDate', 'desc')      
      const sortedUnaswered = _.orderBy(userUnanswerWithPhoto, 'createdDate', 'desc')      
      
      return {
      	...state,
        answeredPolls: sortedAnswered,
        unansweredPolls: sortedUnaswered
      }
      
      
    }
    case SET_POLL_QUESTION: {
    	return {
        	...state,
          	selectedPoll: data
        }
    }      
    case SAVE_POLL_ANSWER: {
    	return {
        	...state,
          	selectedPoll: Object.assign({}, state.selectedPoll, data),
          	polls: [ ...polls ]
        }
    }
    case ADD_POLL_QUESTION: {
    	return {
        	...state,
           polls: [
           	  ...state.polls,
             data
           ]
        }
    }
    case SORT_POLL: {
    	return {
        	...state,
          	polls: data
        }
    }
    default: {
    	return state
    }      
  }
}