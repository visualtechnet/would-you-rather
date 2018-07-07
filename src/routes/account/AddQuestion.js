import React, { PureComponent } from 'react'
import { Grid, Typography } from '@material-ui/core'
import Header from '../../components/Header'

class AddQuestion extends PureComponent {
	render() {
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>
          			<Typography variant="title">Add Question</Typography>
          		</Grid>
          	</Grid>
        )
    }
}

export default AddQuestion