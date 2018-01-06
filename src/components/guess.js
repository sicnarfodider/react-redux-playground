import React from 'react';
import { connect } from 'react-redux';
import { pickNumber, recordNumber} from '../actions';


class Guess extends React.Component{
  constructor(props){
    super(props)

    this.state={
      input: "",
      resp: ""
    }
    this.handleInput= this.handleInput.bind(this)
    this.handleGuess=this.handleGuess.bind(this)
    this.reset= this.reset.bind(this)
  }

    componentDidMount(){
      this.props.pickNumber();
    }

  handleGuess(input){
    // this.props.guessNumber(input)
    const parseInput= parseInt(input);
    if(parseInput>this.props.number){
      this.setState({
        input: "",
        resp: "too high"
      })
    }else if(parseInput<this.props.number){
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
    console.log('reset')
    this.setState({
      resp: ""
    })
    this.props.recordNumber(this.props.number);
    this.props.pickNumber();
  }
  handleInput(event){
    const value = event.target.value
    this.setState({
      input: value
    })
  }


  render(){
    const{input} = this.state
    console.log(this.props.number, this.props)
    return(
      <div>
        <h1>Guessing Game</h1>
        <h3>Guess Range: {this.state.resp}</h3>
        <div className="container ">
          <form className="form-group" onSubmit={(e)=>{
            e.preventDefault();
            this.handleGuess(input);
          }}>
            <label>Input A Guess Number</label>
            <input onChange={this.handleInput} value={input} max="1000" min="1" className="form-control" type="number" name="guess" placeholder="guess between 1-1000"/>
            <button className="btn btn btn-success">Submit</button>
            <div>
              {this.props.records ? this.props.records.map((lastnum,i)=>{
                return(
                  <p key={i}>Game {i+1} Number : {lastnum} </p>
                )
              }) : <p> no record </p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    number: state.number.number,
    records: state.records.records
  }
}

export default connect(mapStateToProps,{pickNumber, recordNumber})(Guess);
