import React, { PureComponent } from 'react';
import { Container } from '../components'
import { Grid, FormControl, Input, InputLabel, Typography, Button } from '@material-ui/core';

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
  
  render() {
    return (
      <Container>
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
      				<Input id="password" name="password" value={this.state.password} onChange={this.handleChange}></Input>
      			</FormControl>
      		</Grid>
       		<Grid item>
       			<Button variant="contained" color="primary">SAVE</Button>
       		</Grid>
      	</Grid>
      </Container>
    )
  }
}

Login.propTypes = {
  
}

export default Login