import React from 'react';
import '../assets/css/content.css';


export default props=>{
  return(
    <div>
      {props.contents.summary}
      <div className="content-detail collapse"  id="collapseContent">
          <div className="card-title"><i onClick={props.viewSwitch} className="fa fa-expand fa-lg" aria-hidden="true"></i> <h1 className="content-title card-block ml-3 center-align">{props.name}</h1></div>
          {props.contents.phase1}
          {props.contents.phase2}
          {props.contents.phase3}
      </div>
    </div>
  )
}
