import * as moment from 'moment'
import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, List, ListItem, Avatar, ListItemText } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AccountContainerWithStyles } from '../../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPolls, getCategoryPolls, setPollQuestion } from '../../state/poll/actions'
import { getUsers } from '../../state/user/actions'
import { withRouter } from 'react-router'

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  expandedPanel: {
  	fontWeight: 'bold',
    color: theme.palette.text.info
  }
  
});

class Home extends PureComponent {
  	constructor(props) {
    	super(props)
      
      this.state = {
      	isLoaded: false,
        unanswered: false,
        answerered: false,
        expanded: null
      }
    }
  
    handleChange = panel => (event, expanded) => {
      this.setState({
        expanded: expanded ? panel : false,
      });
    };
  
  	componentDidMount() {
  		const { polls, getPolls, getCategoryPolls, getUsers, user, users } = this.props;
        
      	if(polls.length === 0) {
          getPolls().then(() => {
              getUsers().then(() => {              	
                  getCategoryPolls(user && user.id, users);
              })
          });
        } else {
          getUsers().then(() => {              	
            getCategoryPolls(user && user.id, users);
          })
        }		
    }
  
  	toggle = (section) => {      	
    	this.setState({ [section]: true })
    }

	onQuestion = (poll) => {    	
      const { history, setPollQuestion } = this.props
            
      setPollQuestion(poll)
      history.push(`/questions/${poll.id}`);
      
      return false;
    }
  
	render() {
      	const { unansweredPolls, answeredPolls, classes } = this.props
        
    	return (
          <AccountContainerWithStyles>          
            <Grid container spacing={8} direction="column">              
              <Grid item>
                  <ExpansionPanel defaultExpanded={true}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="title">Unanswered Poll Questions</Typography>
                        <Typography className={classes.secondaryHeading}></Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                          <div name="unanswered">
                              <List>
                                  {
                                      unansweredPolls.map(poll => {
                                          return (                 					
                                            <a key={poll.id} onClick={e => this.onQuestion(poll)} style={{ cursor: 'pointer'}}>
                                              <ListItem>	
                                                <Avatar src={poll.photo}></Avatar>									
                                                <ListItemText primary={`${poll.name} (${poll.author})`} secondary={`Created on ${moment.parseZone(poll.createdDate).format("MM/DD/YYYY HH:MM A")}`} />
                                              </ListItem>
                                            </a>	
                                          )
                                      })
                                  }
                              </List>
                          </div>                     
                      </ExpansionPanelDetails>
                  </ExpansionPanel>        		
                  <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading} variant="title">Answered Poll Questions</Typography>
                        <Typography className={classes.secondaryHeading}></Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                          <div name="answered">
                              <List>
                                  {
                                      answeredPolls.map(poll => {
                                          return (
                                            <a key={poll.id} onClick={e => this.onQuestion(poll)} style={{ cursor: 'pointer'}}>
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
                      </ExpansionPanelDetails>
                  </ExpansionPanel>
              </Grid>
            </Grid>
		 </AccountContainerWithStyles>
        )
    }
}

Home.propTypes = {
  	user: PropTypes.any,
	polls: PropTypes.array,
  	getPolls: PropTypes.any,
  	getCategoryPolls: PropTypes.any,
  	answeredPolls: PropTypes.array,
  	unansweredPolls: PropTypes.array,
	classes: PropTypes.object.isRequired
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

Home = connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Home)))

export { Home }