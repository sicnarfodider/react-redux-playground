import React from 'react';
import { connect } from 'react-redux';
import { pickNumber, guessNumber } from '../actions';


class Guess extends React.Component{
  constructor(props){
    super(props)

    this.state={
      input: "",
      resp: ""
    }
    this.handleInput= this.handleInput.bind(this)
    this.handleGuess=this.handleGuess.bind(this)
  }

    componentDidMount(){
      this.props.pickNumber();
    }

  handleGuess(input){
    // this.props.guessNumber(input)
    if(input>this.props.number){
      this.setState({
        input: "",
        resp: "too high"
      })
    }else if(input<this.props.number){
      this.setState({
        input: "",
        resp: "too low"
      })
    }else{
      this.setState({
        input: "",
        resp: "you got it!"
      })
      setTimeout(()=>{
        this.reset()
      },1000)
    }
  }
  reset(){
    this.setState({
      resp: ""
    })
    this.props.pickNumber()
  }
  handleInput(event){
    const value = event.target.value
    this.setState({
      input: value
    })
  }


  render(){
    const{input} = this.state
    console.log(this.props.number)
    return(
      <div>
        <h1>Guess A Number</h1>
        <h3>Guess Range: {this.state.resp}</h3>
        <div className="container ">
          <form className="form-group" onSubmit={(e)=>{
            e.preventDefault();
            this.handleGuess(input);
          }}>
            <label>Input A Guess Number</label>
            <input onChange={this.handleInput} value={input} max="1000" min="1" className="form-control" type="number" name="guess" placeholder="guess between 1-1000"/>
            <button className="btn btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    number: state.number.number,
    guess: state.guess
  }
}

export default connect(mapStateToProps,{pickNumber, guessNumber})(Guess);
