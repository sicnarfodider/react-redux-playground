import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import Guess from './guess';
import Input from './input';


const App = () => (
    <div>
        <div className="app">
            <img src={logo} className="logo rotate"/>
            <h1>React <span className="redux" >Redux</span></h1>
            <Guess />
        </div>
    </div>
);

export default App;
