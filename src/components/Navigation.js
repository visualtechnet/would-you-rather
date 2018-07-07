import React, { PureComponent } from 'react'
import { withStyles, Menu, MenuItem, IconButton, Paper, ClickAwayListener } from '@material-ui/core'
import { Link } from 'react-router-dom'
import IconMenu from '@material-ui/icons/Menu'
import { styles } from '../assets/styles'

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
                <Link to="/account/home"><MenuItem>Home</MenuItem></Link>
                <Link to="/account/add"><MenuItem>Add</MenuItem></Link>
                <MenuItem onClose={this.logOut}>Log Out</MenuItem>
              </Menu>
           </Paper>
       </ClickAwayListener>
      </div>
    )
  }
}

Navigation = withStyles(styles)(Navigation)

export default Navigation