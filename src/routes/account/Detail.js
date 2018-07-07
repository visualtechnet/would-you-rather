import React, { PureComponent } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Header from '../../components/Header'

class Detail extends PureComponent {
	render() {
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>
          			<Typography variant="subheading">
          				Questions ...
          			</Typography>
          			A or B
          		</Grid>
          
          	</Grid>
        )
    }
}

export default Detail