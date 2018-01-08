import React from 'react';



export default class Content extends React.Component{
  constructor(props){
    super(props)

    this.state={
      complete: false
    }
    this.toggleComplete=this.toggleComplete.bind(this)
  }
  toggleComplete(){
    console.log("click")
    this.setState({complete: !this.state.complete})
  }

  render(){
    console.log(this.state.complete);
    return(
      <div className={this.state.complete?"complete card" : "card"}>
        <div className="card-block">
          <h2 className="card-title"> Part 1 </h2>
            <h5 className="card-subtitle mb-3 muted">Prep instruction</h5>
            <label className="custom-control custom-checkbox">
              <input onClick={this.toggleComplete} type="checkbox" className="custom-control-input"/>
              <span   className="custom-control-indicator"></span>
              <span  className="custom-control-description">Mark Complete</span>
            </label>
            <ol>
                <li>Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. </li>
                <li>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </li>
                <li>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</li>
                <li>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna.</li>
                <li>Fusce lacinia arcu et nulla. Nulla vitae mauris non felis mollis faucibus.</li>
            </ol>
        </div>
      </div>
    )
  }
};
