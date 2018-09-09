import React, { PureComponent } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Header from '../../components/Header'
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

    handleSave = (e) => {
		const { AddPollQuestion, currentUser, history } = this.props
        
        const pollQuestion = {
          	id: generateUID(),
          	author: currentUser.id,
          	timestamp: Math.floor(Date.now()/1000),
          	optionOne: { 
              votes: [],
              text: this.state.question1
            },
          	optionTwo: {
          	  votes: [],	
          	  text: this.state.question2
        	},
          	photo: currentUser.avatarURL
        }        
        AddPollQuestion(pollQuestion);
      	history.push('/account/home');
    }
  
	render() {
    	return (
        	<Grid container direction="column">
          		<Grid item>
          			<Header />
          		</Grid>
          		<Grid item>
          			<Typography variant="title">Add Question</Typography>
          
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Typography variant="display1">
                          Would You Rather
                        </Typography> 
          				<TextField name="question1" value={this.state.question1} onChange={e => this.handleChange(e)} label='Question 1' />
						<TextField name="question2" value={this.state.question2} onChange={e => this.handleChange(e)} label='Question 2' /><br />
						<Button color="primary" variant="raised" size="small" onClick={e => this.handleSave(e)}>SAVE</Button>
                    </Grid>
          		</Grid>
          </Grid>
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