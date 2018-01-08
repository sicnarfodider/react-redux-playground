import React from 'react';
import '../assets/css/header.css';
import lfz from '../assets/images/lfzlogo.png';



export default props=>{
  return(
      <header className="mt-3 text-center">
        <h1> React Prototypes </h1>
        <div className="lfz"><img src={lfz} /><span className="lfz mr-3"><a target="_blank" href="http://lfzprototypes.com/full-immersion/general" title="go to LFZ PROTOTYPES HOME"> LearningFuze </a></span></div>
      </header>
  )
}
