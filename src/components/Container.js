import React from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from '@material-ui/core'
import { styles } from '../assets/styles'

const Container = ({ classes, children }) => (
  <Grid container justify="center" alignItems="center" className={classes.absoluteCenter}>
    <Grid item>
    	{ children }
    </Grid>
	</Grid>
)

Container.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any
}

const ContainerWithStyles = withStyles(styles)(Container)

export { ContainerWithStyles }
