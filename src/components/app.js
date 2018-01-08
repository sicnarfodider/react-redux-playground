import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Content from './content';
import ReduxResource from '../contentData/resources/ReduxResource';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import reactbg from '../assets/images/react.svg';


export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      viewSwitch: false
    }
    this.viewSwitch=this.viewSwitch.bind(this)
  }

    viewSwitch(){
      this.setState({viewSwitch: !this.state.viewSwitch})
    }


  render(){
    console.log(this.state)
    return(
      <div id="main">
          <div className="container">
                <img className="main-bg-logo" src={reactbg} />
                <Header />
                <Route path="/:type?/:content?" component={Content}/>
          </div>
      </div>
    )
  }
};
