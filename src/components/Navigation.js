import React, { PureComponent } from 'react'
import { withStyles, Menu, MenuItem, IconButton, Paper, ClickAwayListener } from '@material-ui/core'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { clear } from 'redux-localstorage-simple'
import { Link } from 'react-router-dom'
import IconMenu from '@material-ui/icons/Menu'
import { styles } from '../assets/styles'
import { clearLogin } from '../state/login/actions'

class Navigation extends PureComponent {
  constructor(props) {
  	super(props)
    
    this.state = {
      	anchorEl: null
    }
  }
  
  handleCloseNav = () => {
  	this.setState({ anchorEl: null })
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  logOut = () => {
  	const { history, clearLogin } = this.props;
      
    clear();
    clearLogin();
    history.push('/login');
  }

  render() {
    const { classes } = this.props

  	return (
      <div>
      	<IconButton 
           aria-owns={this.state.anchorEl ? 'nav' : null}
           aria-haspopup="true"
           onClick={this.openMenu} 
           size="small" 
           variant="fab" 
           color="primary">
           <IconMenu />
        </IconButton>
        <ClickAwayListener onClickAway={this.handleCloseNav}>
           <Paper className={classes.absolute}>
              <Menu
                id="nav"
                anchorEl={this.state.anchorEl}
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleCloseNav}>
                <Link to="/"><MenuItem>Home</MenuItem></Link>
                <Link to="/add"><MenuItem>Add</MenuItem></Link>				
				<Link to="/leaderboard"><MenuItem>Leaderboard</MenuItem></Link>				
                <MenuItem onClick={this.logOut}>Log Out</MenuItem>
              </Menu>
           </Paper>
       </ClickAwayListener>
      </div>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => bindActionCreators({
	clearLogin
}, dispatch)

Navigation = connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Navigation)))

export { Navigation }