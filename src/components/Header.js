import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Navigation } from '../components'
import { Grid, Avatar, Typography, withStyles } from '@material-ui/core'
import { styles } from '../assets/styles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends PureComponent {
  render() {
    const { classes, user } = this.props
    
  	return (
      <Grid container spacing={8} alignItems="center" className={classes.header}>
      	<Grid item sm={6} className={classes.leftAligned}>
    		<Link to='/'><Typography variant="title">Would You Rather??</Typography></Link>
      	</Grid>
      	<Grid item sm={6} className={classes.rightAligned}>
			 <Avatar alt={user && user.name} src={user && user.avatarURL} />&nbsp;&nbsp;
      		 Hi { user && user.name }
      		<Navigation />
      	</Grid>
      </Grid>
    )
  }
}

Header.propTypes = {
	classes: PropTypes.any,
  	user: PropTypes.object
}

const mapStateToProps = state => ({
	user: state.login.user
})

Header = withStyles(styles)(connect(mapStateToProps)(Header))

export { Header }

