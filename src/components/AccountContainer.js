import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, withStyles } from '@material-ui/core'
import Header from './Header'
import { styles } from '../assets/styles'

class AccountContainer extends PureComponent {
	
	render() {
      	const { children } = this.props 
        
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>
          			{ children }
          		</Grid>
          	</Grid>
        )
    }
}

AccountContainer.propTypes = {
  	classes: PropTypes.any,
	children: PropTypes.any
}

AccountContainer = withStyles(styles)(AccountContainer)