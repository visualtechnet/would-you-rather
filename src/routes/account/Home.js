import React, { PureComponent } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Header from '../../components/Header'

class Home extends PureComponent {
	render() {
    	return (
          <Grid container spacing={8} direction="column">
          	<Grid item>
          		<Header />
          	</Grid>
          	<Grid item>
        		<Typography variant="title">
          			Unanswered
          		</Typography>
          		<hr />
          		<Typography variant="title">
          			Answered
          		</Typography>
          		<hr />
          	</Grid>
          </Grid>
        )
    }
}

export default Home