import * as moment from 'moment'
import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, List, ListItem, Avatar, ListItemText, Button } from '@material-ui/core'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPolls, getCategoryPolls, setPollQuestion } from '../../state/poll/actions'
import { getUsers } from '../../state/user/actions'
import NavigationIcon from '@material-ui/icons/Navigation'
import { withRouter } from 'react-router'

class Home extends PureComponent {
  	constructor(props) {
    	super(props)
      
      this.state = {
      	isLoaded: false,
        unanswered: false,
        answerered: false
      }
    }
  
  	componentWillMount() {
  		const { polls, getPolls, getCategoryPolls, getUsers, user, users } = this.props;
        
      	if(polls.length === 0) {
          getPolls().then(() => {
              getUsers().then(() => {              	
                  getCategoryPolls(user.id, users);
              })
          });
        } else {
          getUsers().then(() => {              	
            getCategoryPolls(user.id, users);
          })
        }
    }
  
  	toggle = (section) => {      	
    	this.setState({ [section]: true })
    }

	onQuestion = (poll) => {    	
      const { history, setPollQuestion } = this.props
            
      setPollQuestion(poll)
      history.push(`/account/questions/${poll.id}`);
      
      return false;
    }
  
	render() {
      	const { unansweredPolls, answeredPolls } = this.props
        
    	return (
          <Grid container spacing={8} direction="column">
          	<Grid item>
          		<Header />
          	</Grid> 
          	<Grid item>								
        		<Typography variant="title">
          			Unanswered&nbsp;<Button variant="extendedFab" onClick={this.toggle('unanswered')}><NavigationIcon size="small" />Toggle</Button>
          		</Typography>
				{ this.state.unanswered && (<div name="unanswered">
					<List>
						{
                        	unansweredPolls.map(poll => {
                        		return (                 					
                 				  <a key={poll.id} onClick={e => this.onQuestion(poll)}>
                                    <ListItem>	
                                      <Avatar src={poll.photo}></Avatar>									
                                      <ListItemText primary={`${poll.author}`} secondary={`Created on ${moment.parseZone(poll.timestamp).format("MM/DD/YYYY HH:MM A")}`} />
                                    </ListItem>
								  </a>	
                          		)
                        	})
                        }						
					</List>
				</div>) }
          		<hr />
          		<Typography variant="title">
          			Answered&nbsp;<Button variant="extendedFab" onClick={this.toggle('answered')}><NavigationIcon size="small" />Toggle</Button>
          		</Typography>
				<div name="answered">
					<List>
						{
                        	answeredPolls.map(poll => {
                        		return (
                                  <a key={poll.id} onClick={e => this.onQuestion(poll)}>
                                    <ListItem>	
                                      <Avatar src={poll.photo}></Avatar>
                                      <ListItemText primary={poll.author} secondary={`Created on ${moment.parseZone(poll.timestamp).format("MM/DD/YYYY HH:MM A")}`} />
                                    </ListItem>
                                  </a>
                          		)
                        	})
                        }						
					</List>
				</div>          		
          	</Grid>
          </Grid>
        )
    }
}

Home.propTypes = {
  	user: PropTypes.any,
	polls: PropTypes.array,
  	getPolls: PropTypes.any,
  	getCategoryPolls: PropTypes.any,
  	answeredPolls: PropTypes.array,
  	unansweredPolls: PropTypes.array
}

const mapStateToProps = state => ({
	polls: state.poll.polls,
  	user: state.login.user,
	users: state.user.users,
  	answeredPolls: state.poll.answeredPolls,
  	unansweredPolls: state.poll.unansweredPolls	
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getPolls,
  	getCategoryPolls,
	getUsers,
	setPollQuestion
}, dispatch)

Home = connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))

export { Home }