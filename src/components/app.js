import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Nav from './nav';
import Content from './content';
import ReduxResource from '../contentData/resources/ReduxResource';
import projects from './project-content';
import prototypes from './prototype-content';
import resources from './resource-content';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import reactbg from '../assets/images/react.svg';


export default class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      fullContent: false
    }
  }

  render(){
    return(
      <div id="main">
          <div className="container">
                <img className="main-bg-logo" src={reactbg} />
                <Header />
                <div id="main-content" className="row justify-content-md-center">
                    <div className="nav-container col-lg-3">
                        <Nav projects={projects} prototypes={prototypes} resources={resources}/>
                    </div>
                <Route path="/resources?" component={ReduxResource}/>
                <Route path="/:type?/:content?" component={Content}/>
                </div>
          </div>
      </div>
    )
  }
}
