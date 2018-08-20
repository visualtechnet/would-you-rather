import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Container } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, FormControl, InputLabel, Typography, Button, Select, MenuItem } from '@material-ui/core'
import { getUsers, loadUser } from '../state/login/actions'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      passord: '',
      selectedUser: 'sarahedo'
    }
  }
  
  handleChange = (event) => {
  	this.setState({ [event.target.name]: event.target.value })    
  }

 componentWillMount() {
 	const { getUsers } = this.props

	getUsers();	
 }

  login = () => {
    const { history, loadUser, users } = this.props;    
    const selectedUser = users.find(user => user.id === this.state.selectedUser);
        
    loadUser(selectedUser);
  	history.push('account/home')
  }
  
  render() {
    const { users } = this.props

    return (
      <Container>
       	<form onSubmit={this.login}>
          <Grid container spacing={8} direction="column" justify="center" alignItems="center">
              <Grid item>
                  <Typography variant="title">
                      Would you rather?
                  </Typography>
              </Grid>
			  <Grid item>
					<hr />
			  </Grid>
			  <Grid item>
				<FormControl>
					<InputLabel htmlFor="user">Select a User</InputLabel>
					<Select name="selectedUser" value={this.state.selectedUser} onChange={this.handleChange}>
                    {                      
     					users.map(user => {
                    		return (
                                <MenuItem key={user.id} value={user.id}>{user.name}</MenuItem>
                            )
                    	})
                    }
					</Select>
				</FormControl>
			  </Grid>              
              <Grid item>
                  <Button variant="raised" color="primary" onClick={this.login}>LOGIN</Button>
              </Grid>
          </Grid>
       	</form>
      </Container>
    )
  }
}

Login.propTypes = {
  users: PropTypes.array.isRequired,
  loadUser: PropTypes.any,
  getUser: PropTypes.any
}

const mapStateToProps = state => ({
  users: state.login.users
})

const mapDispatchToProps = dispatch => 
bindActionCreators(
  {
	getUsers,
    loadUser 
  }, dispatch)

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login