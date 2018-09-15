import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, Avatar, Button } from '@material-ui/core'
import ThumbUp from '@material-ui/icons/ThumbUp'
import { AccountContainerWithStyles } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { savePollAnswer, getCategoryPolls } from '../../state/poll/actions'

class Questions extends PureComponent {

  componentDidMount() {
  	const { match, polls, history } = this.props
    const isFound = polls.find(d => d.id === match.params.id)
    
    if(!isFound) {
    	history.push('/page-not-found')
    }        
  }
  
  votePoll = (index) => {
    const { selectedPoll, currentUser, polls, savePollAnswer } = this.props    
        
    if(selectedPoll.optionOne.votes.find(d => d === currentUser.id) || 
       selectedPoll.optionTwo.votes.find(d => d === currentUser.id) ) {
      alert('You have already voted');
      return false;
    }             
    if(index === 1) {
    	// voted for option one
      selectedPoll.optionOne.votes.push(currentUser.id)       
    }
    else if(index === 2) {
      // voted for option two
      selectedPoll.optionTwo.votes.push(currentUser.id)
    }         
    
    const newSelectedPoll = {...selectedPoll};    
    // Update polls    
    const updatedPolls = polls.map(poll => {
    	if(poll.id === selectedPoll.id) {
        	return Object.assign({}, poll, newSelectedPoll);
        }
      return poll;
    });
                
    savePollAnswer(newSelectedPoll, updatedPolls);    
        
    return false;
  };
  
  render() {        
    const { selectedPoll, currentUser } = this.props
    const votedOptionOne = selectedPoll.optionOne.votes.find(d => d === currentUser.id);
    const votedOptionTwo = selectedPoll.optionTwo.votes.find(d => d === currentUser.id);
    
	const totalVotes = selectedPoll.optionOne.votes.length > 0 && selectedPoll.optionTwo.votes.length > 0 ? selectedPoll.optionOne.votes.length + selectedPoll.optionTwo.votes.length : 0;

	const percentVoteOptionOne = selectedPoll.optionOne.votes.length > 0 && selectedPoll.optionTwo.votes.length > 0 ? Math.round((selectedPoll.optionOne.votes.length / totalVotes) * 100) : 0;

    const percentVoteOptionTwo = selectedPoll.optionTwo.votes.length > 0 ? Math.round((selectedPoll.optionTwo.votes.length / totalVotes) * 100) : 0;
	
  	return (
      <AccountContainerWithStyles>
         <Grid container spacing={8} direction="column">        
            <Grid item>          
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="display1">
                          Would You Rather
                        </Typography>
                        <Typography variant="title"><br />
                            <Avatar size="large" src={selectedPoll.photo} />  
                        </Typography>
                        <Grid item xs={12}>
                            <Typography variant="subheading">{selectedPoll.name}</Typography>
                            <Typography variant="body2">({selectedPoll.author})</Typography>
                        </Grid>
                        <Grid item xs={12}>					  
                          <hr />
                          <br />	
                          <Grid container spacing={32} justify="center" alignItems="flex-start">
                            <Grid item xs={6}>
                                <Typography variant="title">{`${selectedPoll.optionOne.text.charAt(0).toUpperCase()}${selectedPoll.optionOne.text.slice(1)}`}</Typography><br />
                                <Typography variant="body1">No of votes: {selectedPoll.optionOne.votes.length}</Typography><br/>
    <Typography variant="body1">% of votes: {percentVoteOptionOne}</Typography><br/>
    { votedOptionOne && (<div><ThumbUp color="primary" /><small>You Voted for this!</small></div>)}<br/>
    <Button name="1" variant="raised" size="small" onClick={e => this.votePoll(1)} color="primary" fullWidth>Vote</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="title">{`${selectedPoll.optionTwo.text.charAt(0).toUpperCase()}${selectedPoll.optionTwo.text.slice(1)}`}</Typography><br />
                                <Typography variant="body1">No of votes: {selectedPoll.optionTwo.votes.length}</Typography><br/>
    <Typography variant="body1">% of votes: {percentVoteOptionTwo}</Typography><br/>
    { votedOptionTwo && (<div><ThumbUp color="primary" /><small>You Voted for this!</small></div>)}<br/>
                                <Button name="2" variant="raised" size="small" color="primary" onClick={e => this.votePoll(2)} fullWidth>Vote</Button>
                            </Grid>
                          </Grid>
                        </Grid><br />
                        <Grid item>
                            <Link to="/home">Go Back</Link>
                        </Grid>
                    </Grid>			
            </Grid>
         </Grid>        
	</AccountContainerWithStyles>)
  }
}

Questions.propTypes = {
  selectedPoll: PropTypes.object.isRequired,
  polls: PropTypes.array.isRequired,
  users: PropTypes.object,
  currentUser: PropTypes.object.isRequired,
  savePollAnswer: PropTypes.any
}

const mapStateToProps = state => ({
  	selectedPoll: state.poll.selectedPoll,
	polls: state.poll.polls,
  	users: state.user.users,
  	currentUser: state.login.user
})

const mapDispatchToProps = dispatch => bindActionCreators({
	savePollAnswer,
  	getCategoryPolls
}, dispatch)

Questions = connect(mapStateToProps, mapDispatchToProps)(Questions)

export { Questions }