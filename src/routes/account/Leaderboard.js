import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, Avatar } from '@material-ui/core'
import Header from '../../components/Header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { LoadLeaderboard } from '../../state/leaderboard/actions'
import { getPolls } from '../../state/poll/actions'
import { getUsers } from '../../state/user/actions'

class Leaderboard extends PureComponent {
  	
  	componentWillMount() {
    	const { LoadLeaderboard, users, polls } = this.props
        
        LoadLeaderboard(users, polls);
    }
  
	render() {
      	const { leaderboardList } = this.props
        
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>
          			<Grid container direction="column" spacing={24} justify="center" alignItems="center">
						<Grid item>
							<Typography variant="display1">
                              Leaderboard
                          </Typography>
						</Grid>
						<Grid item>
                          {
                              leaderboardList.map(user => {
                                  return (
                                      <Grid container direction="column" spacing={16}>
                                        <Grid item>
                                            <Avatar src={user.photo}></Avatar>
                                        </Grid>
                                        <Grid item>
                                          <Typography>	
                                             User: {user.name}
                                          </Typography>
										  <br />
										  Total Questions: {user.noOfQuestionsAsked}
										  <br />
										  Total Answered: {user.noOfQuestionsAnswered}							
                                        </Grid>
										<Grid item>
											<hr />
										</Grid>
                                      </Grid>
                                  )
                              })
                          }
						</Grid>
					</Grid>
          		</Grid>
          
          	</Grid>
        )
    }
}

Leaderboard.propTypes = {
  leaderboardList: PropTypes.array,
  LoadLeaderboard: PropTypes.any,
  getUsers: PropTypes.any,
  getPolls: PropTypes.any
}

const mapStateToProps = state => ({
  	leaderboardList: state.leaderboard.leaderboardList,
  	users: state.user.users,
  	polls: state.poll.polls
});

const mapDispatchToProps = dispatch => bindActionCreators({
	LoadLeaderboard,
  	getUsers,
  	getPolls
}, dispatch);

Leaderboard = connect(mapStateToProps, mapDispatchToProps)(withRouter(Leaderboard))

export { Leaderboard }