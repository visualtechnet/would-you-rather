import React, { PureComponent } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AccountContainer } from '../../components'
import { withRouter } from 'react-router'
import { AddPollQuestion } from '../../state/poll/actions'
import { generateUID } from '../../utilities'

class AddQuestion extends PureComponent {
  	constructor(props) {
      super(props)
      
      this.state = {
      	question1: '',
        question2: ''
      }
    }
  
  	handleChange = (e) => {
    	this.setState({ [e.target.name]: e.target.value });                 
    }

	goBack = () => {
    	const { history } = this.props
        
        history.goBack();        
    }

    handleSave = (e) => {
		const { AddPollQuestion, currentUser, history } = this.props
        
        const pollQuestion = {
          	id: generateUID(),
          	author: currentUser.id,
          	timestamp: new Date(),
          	optionOne: { 
              votes: [],
              text: this.state.question1
            },
          	optionTwo: {
          	  votes: [],	
          	  text: this.state.question2
        	},
          	photo: currentUser.avatarURL,
          	name: currentUser.name
        }        
        AddPollQuestion(pollQuestion);
      	history.push('/account/home');
    }
  
	render() {
    	return (
      		<AccountContainer>
              <Grid container direction="column">          		
                  <Grid item>                      
                      <Grid container direction="column" justify="center" alignItems="center">
                          <Typography variant="display1">
                            Would You Rather
                          </Typography> 
                          <TextField name="question1" value={this.state.question1} onChange={e => this.handleChange(e)} label='Question 1' />
                          <TextField name="question2" value={this.state.question2} onChange={e => this.handleChange(e)} label='Question 2' /><br />
                          <Grid container spacing={16} justify="center" alignItems="center">
                            <Button color="primary" variant="raised" size="small" onClick={e => this.goBack()}>GO BACK</Button>&nbsp;
                            <Button color="primary" variant="raised" size="small" onClick={e => this.handleSave(e)}>SAVE</Button>
                          </Grid>
                      </Grid>
                  </Grid>
            </Grid>
		  </AccountContainer>
        )
    }
}

const mapStateToProps = state => ({
	currentUser: state.login.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
	AddPollQuestion	
}, dispatch);

AddQuestion = connect(mapStateToProps, mapDispatchToProps)(withRouter(AddQuestion));

export { AddQuestion }