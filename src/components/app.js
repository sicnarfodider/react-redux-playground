import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Content from './content';
import projects from './project-content';
import prototypes from './prototype-content';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import reactbg from '../assets/images/react.svg';


export default class App extends React.Component{

  render(){
    console.log(this.state)
    return(
      <div id="main">
        <img className="main-bg-logo" src={reactbg} />
        <div className="container">
          <Header />
          <Route path="/:type?/:content?" component={Content}/>
        </div>
      </div>
    )
  }
};
