import React, { PureComponent } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import NoteAdd from '@material-ui/icons/NoteAdd';
import Dashboard from '@material-ui/icons/Dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loadPage } from '../state/navigation/actions'
import { HOMEPAGE, ADD_POLL_PAGE, LEADERBOARD_PAGE } from '../constants/ActionTypes'

const styles = {
  root: {
    width: 500,
  },
};


class MainNavigation  extends PureComponent {
  	constructor(props) {
    	super(props)
      
      	this.state = {
        	value: props.currentPage
        }
    }
  
    handleChange = (event, value) => {
      const { history, loadPage } = this.props     
      this.setState({ value });
      
      switch(value) {
        case ADD_POLL_PAGE: {
          	loadPage(ADD_POLL_PAGE);
            history.push('/add');
        	break;
        }
        case LEADERBOARD_PAGE: {
          	loadPage(LEADERBOARD_PAGE);
            history.push('/leaderboard');
        	break;
        }
        default: {
          	loadPage(HOMEPAGE);
        	history.push('/home');        	
        }
      }
    }

	render() {
      	const { classes } = this.props		

    	return (
          
          <BottomNavigation
              value={this.state.value}
              onChange={this.handleChange}
              showLabels
              className={classes.root}>
            <BottomNavigationAction label="Home" icon={<QuestionAnswer />} />
            <BottomNavigationAction label="Add" icon={<NoteAdd />}  />
            <BottomNavigationAction label="Leaderboard" icon={<Dashboard />}  />
          </BottomNavigation>
        )
    }
}

const mapStateToProps = state => ({
	currentPage: state.navigation.currentPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
	loadPage
}, dispatch)

MainNavigation = connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(MainNavigation)));

export { MainNavigation }