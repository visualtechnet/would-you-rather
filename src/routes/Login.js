import React, { PureComponent } from 'react'
import { Container } from '../components'
import { Grid, FormControl, Input, InputLabel, Typography, Button } from '@material-ui/core'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      passord: ''
    }
  }
  
  handleChange = (event) => {
  	this.setState({ [event.target.name]: event.target.value })
  }

  login = () => {
    const { history } = this.props
    
  	history.push('account/home')
  }
  
  render() {
    return (
      <Container>
       	<form onChange={this.login}>
          <Grid container spacing={8} direction="column" justify="center" alignItems="center">
              <Grid item>
                  <Typography variant="title">
                      Would you rather?
                  </Typography>
              </Grid>
              <Grid item>
                  <FormControl>
                      <InputLabel htmlFor="username">UserName</InputLabel>
                      <Input id="username" name="username" value={this.state.username} onChange={this.handleChange}></Input>
                  </FormControl>
              </Grid>
              <Grid item>
                  <FormControl>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Input id="password" name="password" value={this.state.password} onChange={this.handleChange} />
                  </FormControl>
              </Grid>
              <Grid item>
                  <Button variant="raised" color="primary" onClick={this.login}>SAVE</Button>
              </Grid>
          </Grid>
       	</form>
      </Container>
    )
  }
}

Login.propTypes = {
  
}

export default Login