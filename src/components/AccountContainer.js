import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, withStyles } from '@material-ui/core'
import { Header } from './Header'
import { styles } from '../assets/styles'
import { MainNavigation } from './MainNavigation'

class AccountContainer extends PureComponent {
	
	render() {
      	const { children } = this.props 
        
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>					
					<MainNavigation />
          			<hr /><br />
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

export { AccountContainer }