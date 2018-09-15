import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { ContainerWithStyles } from '../components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid, FormControl, InputLabel, Typography, Button, Select, MenuItem } from '@material-ui/core'
import { loadPage } from '../state/navigation/actions'
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

 componentDidMount() {
 	const { getUsers } = this.props

	getUsers();		
 }

  login = () => {
    const { history, loadUser, users, loadPage } = this.props;    
    const selectedUser = users.find(user => user.id === this.state.selectedUser);
        
    loadUser(selectedUser);
  	history.push('/home')
    loadPage(0);
  }
  
  render() {
    const { users } = this.props

    return (
      <ContainerWithStyles>
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
      </ContainerWithStyles>
    )
  }
}

Login.propTypes = {
  users: PropTypes.array.isRequired,
  loadUser: PropTypes.any,
  getUser: PropTypes.any,
  loadPage: PropTypes.any
}

const mapStateToProps = state => ({
  users: state.login.users
})

const mapDispatchToProps = dispatch => 
bindActionCreators(
  {
	getUsers,
    loadUser,
    loadPage
  }, dispatch)

Login = connect(mapStateToProps, mapDispatchToProps)(Login)

export default Login