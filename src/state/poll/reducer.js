import { 
  GET_POLLS,
  GET_CATEGORY_POLLS
} from './../../constants/ActionTypes'

const settings = {
	polls: [],
    unansweredPolls: [],
    answeredPolls: []
}

export const poll = (state = settings, action) => {
  const { type, data } = action
  
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
            
      console.log('Current User', currentUser)
      console.log('All Optione One votes', allPolls[0].optionOne.votes);
      console.log('Finding Sarahedo', allPolls[0].optionOne.votes.find(user => user === currentUser))
      console.log(allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) !== undefined))
      
      return {
      	...state,
        answeredPolls: allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) !== undefined),
        unansweredPolls: allPolls.filter(poll => poll.optionOne.votes.find(user => user===currentUser) === undefined)
      }
    }
    default: {
    	return state
    }      
  }
}