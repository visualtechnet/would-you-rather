import React, { PureComponent } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

class PageNotFound extends PureComponent {
  goBack = () => {
    const { history } = this.props
    
    history.push('/home');
  }

  render() {
  	return (
      <Grid container style={{ flexDirection: "column",  }} justify="center" alignItems="center">
    	<Typography variant="display4">
      		Page Not Found
      	</Typography>
      	<Button color="primary" variant="raised" onClick={e => this.goBack()}>GO HOME</Button>
      </Grid>
    )
  }
}

PageNotFound = withRouter(PageNotFound);

export default PageNotFound;