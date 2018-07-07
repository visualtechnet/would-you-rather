import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import Navigation from '../components/Navigation'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { styles } from '../assets/styles'

class Header extends PureComponent {
  render() {
    const { classes } = this.props
    
  	return (
      <Grid container spacing={8} alignItems="center" className={classes.header}>
      	<Grid item sm={6} className={classes.leftAligned}>
    		<Typography variant="title">Would You Rather??</Typography>
      	</Grid>
      	<Grid item sm={6} className={classes.rightAligned}>
      		Hi Joe
      		<Navigation />
      	</Grid>
      </Grid>
    )
  }
}

Header.propTypes = {
	classes: PropTypes.any
}

Header = withStyles(styles)(Header)

export default Header

