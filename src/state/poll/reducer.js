import { 
  GET_POLLS,
  GET_CATEGORY_POLLS,
  SET_POLL_QUESTION,
  SAVE_POLL_ANSWER,
  ADD_POLL_QUESTION
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
      
    	return { 
          ...state,
          polls
        }
    }
    case GET_CATEGORY_POLLS: {
      const currentUser = data;
      const allPolls = state.polls;
	  console.log('All Users', allUsers)         
      console.log('Current User', currentUser)
      console.log('All Optione One votes', allPolls[0].optionOne.votes);
      console.log('Finding Sarahedo', allPolls[0].optionOne.votes.find(user => user === currentUser))
      console.log(allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) !== undefined))
      
      const sortedAnswer = _.orderBy(allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) !== undefined), 'timestamp', 'desc')
      const sortedUnanswer = _.orderBy(allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) === undefined), 'timestamp', 'desc')
            
      const userAnswerWithPhoto = sortedAnswer.map((answerWithUser) => {            
        const currentAvatar = allUsers[answerWithUser.author] && allUsers[answerWithUser.author].avatarURL
        
      	return {
          ...answerWithUser,
          photo: currentAvatar
        }
      });
      
      const userUnanswerWithPhoto = sortedUnanswer.map((unanswerWithUser) => {        
      	const currentAvatar = allUsers[unanswerWithUser.author].avatarURL
        
        return {
          	...unanswerWithUser,
        	photo: currentAvatar
        }
      });
      
      console.log(userAnswerWithPhoto)
      console.log(userUnanswerWithPhoto)
      return {
      	...state,
        answeredPolls: userAnswerWithPhoto,
        unansweredPolls: userUnanswerWithPhoto
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
    default: {
    	return state
    }      
  }
}