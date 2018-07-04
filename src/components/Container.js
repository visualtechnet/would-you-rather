import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import { styles } from '../assets/styles'

class Container extends PureComponent {
	render() {
      const { classes, children } = this.props
      
      return (
        <Grid container justify="center" alignItems="center" className={classes.absoluteCenter}>
        	<Grid item>
        		{ children }
        	</Grid>
        </Grid>
      )
    }
}

Container.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any
}

Container = withStyles(styles)(Container)

export { Container }
