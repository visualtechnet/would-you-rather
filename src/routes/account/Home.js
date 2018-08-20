import * as moment from 'moment'
import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, List, ListItem, Avatar, ListItemText } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPolls, getCategoryPolls } from '../../state/poll/actions'


class Home extends PureComponent {
  	constructor(props) {
    	super(props)
      
      this.state = {
      	isLoaded: false
      }
    }
  
  	componentWillMount() {
  		const { getPolls, getCategoryPolls, user } = this.props;
        
        getPolls().then(() => {
        	getCategoryPolls(user.id)
        });
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
          			Unanswered
          		</Typography>
				<div>
					<List>
						{
                        	unansweredPolls.map(poll => {
                        		return (
                          		  <ListItem>	
                                    <Avatar>
                                      <ImageIcon />
                                    </Avatar>
                                    <ListItemText primary={poll.author} secondary={`Created on ${moment.parseZone(poll.timestamp).format("MM/DD/YYYY HH:MM A")}`} />
                          		  </ListItem>
                          		)
                        	})
                        }						
					</List>
				</div>
          		<hr />
          		<Typography variant="title">
          			Answered
          		</Typography>
				<div>
					<List>
						{
                        	answeredPolls.map(poll => {
                        		return (
                          		  <ListItem>	
                                    <Avatar>
                                      <ImageIcon />
                                    </Avatar>
                                    <ListItemText primary={poll.author} secondary={`Created on ${moment.parseZone(poll.timestamp).format("MM/DD/YYYY HH:MM A")}`} />
                          		  </ListItem>
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
  	answeredPolls: state.poll.answeredPolls,
  	unansweredPolls: state.poll.unansweredPolls
})

const mapDispatchToProps = dispatch => bindActionCreators({
	getPolls,
  	getCategoryPolls
}, dispatch)

Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home