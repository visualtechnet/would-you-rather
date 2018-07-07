import React, { PureComponent } from 'react'
import { Grid } from '@material-ui/core'
import Header from '../../components/Header'

class Home extends PureComponent {
	render() {
    	return (
          <Grid container direction="column">
          	<Grid item>
          		<Header />
          	</Grid>
          	<Grid item>
        		<p>Home Page</p>
          	</Grid>
          </Grid>
        )
    }
}

export default Home