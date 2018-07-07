import React, { PureComponent } from 'react'
import { Grid, withStyles, Menu, MenuItem, IconButton, Paper, ClickAwayListener } from '@material-ui/core'
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
        <Grid container justify="center" alignItems="center" className={classes.relative}>
          <Grid item>
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
                      <MenuItem onClose={this.logOut}>Log Out</MenuItem>
                    </Menu>
                  </Paper>
                </ClickAwayListener>
          </Grid>
        </Grid>
    )
  }
}

Navigation = withStyles(styles)(Navigation)

export default Navigation