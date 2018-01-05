import React from 'react';
import { connect } from 'react-redux';
import { pickNumber } from '../actions';

class Guess extends React.Component{
  componentDidMount(){
    this.props.pickNumber();
  }


  render(){
    return(
      <div>
        <h1>Guess A Number</h1>
        <h3>{this.props.number}</h3>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    number: state.number.number
  }
}

export default connect(mapStateToProps,{pickNumber})(Guess);
