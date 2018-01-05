import React from 'react';
import {connect} from 'react-redux';
import { guessNumber } from '../actions';


class Input extends React.Component{
  constructor(props){
    super(props)

    this.state={
      input: ""
    }

    this.handleInput= this.handleInput.bind(this)
  }
  handleInput(event){
    const value = event.target.value
    this.setState({
      input: value
    })
  }

  render(){
    const{input} = this.state
    return(
      <div className="container ">
        <form className="form-group" onSubmit={(e)=>{
          e.preventDefault();
          this.props.guessNumber(input);
        }}>
          <label>Input A Guess Number</label>
          <input onChange={this.handleInput} value={input} max="1000" min="1" className="form-control" type="number" name="guess"/>
          <button className="btn btn btn-success">Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    guess: state.guess
  }
}

export default connect(mapStateToProps,{guessNumber})(Input)
