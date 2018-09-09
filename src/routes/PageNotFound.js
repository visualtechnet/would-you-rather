import React, { PureComponent } from 'react'
import { Grid, Typography } from '@material-ui/core'

class PageNotFound extends PureComponent {
  render() {
  	return (
      <Grid container justify="center" alignItems="center">
    	<Typography variant="display4">
      		Page Not Found
      	</Typography>
      </Grid>
    )
  }
}

export default PageNotFound;