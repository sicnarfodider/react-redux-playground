import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header';
import Nav from './nav';
import Content from './content';
import projects from './project-content';
import prototypes from './prototype-content';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import reactbg from '../assets/images/react.svg';

const App = () => (
    <div id="main">
        <div className="container">
              <img className="main-bg-logo" src={reactbg} />
              <Header />
              <div id="main-content" className="row justify-content-md-center">
                  <div className="nav-container col-lg-3">
                      <Nav projects={projects} prototypes={prototypes}/>
                  </div>
              <Route exact path="/" component={Content}/>
              <Route path="/projects/:content?"  component={Content}/>
              <Route path="/prototypes/:content?"  component={Content}/>
              </div>
        </div>
    </div>
);

export default App;
