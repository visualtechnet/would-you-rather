import React from 'react'
import PropTypes from 'proptypes'
import { Grid, withStyles } from '@material-ui/core'
import { Header } from './Header'
import { styles } from '../assets/styles'
import { MainNavigation } from './MainNavigation'

const AccountContainer = ({ children }) => (
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

AccountContainer.propTypes = {
  	classes: PropTypes.any,
	children: PropTypes.any
}

const AccountContainerWithStyles = withStyles(styles)(AccountContainer)

export { AccountContainerWithStyles }