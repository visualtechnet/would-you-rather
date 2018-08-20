import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import Navigation from '../components/Navigation'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { styles } from '../assets/styles'
import { connect } from 'react-redux'

class Header extends PureComponent {
  render() {
    const { classes, user } = this.props
    
  	return (
      <Grid container spacing={8} alignItems="center" className={classes.header}>
      	<Grid item sm={6} className={classes.leftAligned}>
    		<Typography variant="title">Would You Rather??</Typography>
      	</Grid>
      	<Grid item sm={6} className={classes.rightAligned}>
      		Hi { user.name }
      		<Navigation />
      	</Grid>
      </Grid>
    )
  }
}

Header.propTypes = {
	classes: PropTypes.any,
  	user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	user: state.login.user
})

Header = withStyles(styles)(connect(mapStateToProps)(Header))

export default Header

