import React, { PureComponent } from 'react'
import PropTypes from 'proptypes'
import { Grid, Typography, Button, FormControl, Input, InputLabel, FormHelperText } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { AccountContainerWithStyles } from '../../components'
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
        if(this.state.question1.length > 0 && this.state.question2.length > 0)
        	AddPollQuestion(pollQuestion);
      	else 
          alert('All field are required');
      	history.push('/home');
    }
  
	render() {
    	return (
      		<AccountContainerWithStyles>
              <Grid container direction="column">          		
                  <Grid item>                      
                      <Grid container direction="column" justify="center" alignItems="center">
                          <Typography variant="display1">
                            Would You Rather
                          </Typography><br />
             			  { this.state.question1.trim().length === 0 ? (<FormControl>
             				<InputLabel htmlFor="question1">Question 1</InputLabel>
                          	<Input id="question1" error name="question1" value={this.state.question1} onChange={e => this.handleChange(e)} label='Question 1' />
							<FormHelperText id="question1-label-text" error><small><i>This field is required</i></small></FormHelperText>
						  </FormControl>) :  (<FormControl>
             				<InputLabel htmlFor="question1">Question 1</InputLabel>
                          	<Input id="question1" name="question1" value={this.state.question1} onChange={e => this.handleChange(e)} label='Question 1' />
							<FormHelperText id="question1-label-text"><small><i>This field is required</i></small></FormHelperText>
						  </FormControl>)}
						  { this.state.question2.trim().length === 0 ? (<FormControl>
             				<InputLabel htmlFor="question1">Question 2</InputLabel>
                          	<Input id="question2" error name="question2" value={this.state.question2} onChange={e => this.handleChange(e)} label='Question 2' />
							<FormHelperText id="question1-label-text" error ><small><i>This field is required</i></small></FormHelperText>
						  </FormControl>) : (<FormControl>
             				<InputLabel htmlFor="question1">Question 2</InputLabel>
                          	<Input id="question2" 								
								name="question2" value={this.state.question2} onChange={e => this.handleChange(e)} label='Question 2' />
							<FormHelperText id="question1-label-text"><small><i>This field is required</i></small></FormHelperText>
						  </FormControl>) }
						  <br />
                          <Grid container spacing={16} justify="center" alignItems="center">
                            <Button color="primary" variant="raised" size="small" onClick={e => this.goBack()}>GO BACK</Button>&nbsp;
                            <Button color="primary" variant="raised" size="small" onClick={e => this.handleSave(e)}>SAVE</Button>
                          </Grid>
                      </Grid>
                  </Grid>
            </Grid>
		  </AccountContainerWithStyles>
        )
    }
}

AddQuestion.propTypes = {
	currentUser: PropTypes.object,
  	AddPollQuestion: PropTypes.any
}

const mapStateToProps = state => ({
	currentUser: state.login.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
	AddPollQuestion	
}, dispatch);

AddQuestion = connect(mapStateToProps, mapDispatchToProps)(withRouter(AddQuestion));

export { AddQuestion }