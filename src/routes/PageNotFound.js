import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const goBack = (history) => {
    history.push('/');
}

const PageNotFound = ({ history }) => (
      <Grid container style={{ flexDirection: "column",  }} justify="center" alignItems="center">
    	<Typography variant="display4">
      		Page Not Found
      	</Typography>
      	<Button color="primary" variant="raised" onClick={e => goBack(history)}>GO HOME</Button>
      </Grid>
    )

const PageNotFoundWithRouter = withRouter(PageNotFound)  
export default PageNotFoundWithRouter;