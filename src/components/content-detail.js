import React from 'react';
import projects from './project-content';
import prototypes from './prototype-content';



const Content=()=>{
  debugger;
  return(
    <div>
      {projects[0].files.summary}
      <div className="content-detail collapse"  id="collapseContent">
          <div><i className="fa fa-expand fa-lg" aria-hidden="true"></i> <h1 className="center-align">FULL DETAIL INSTRUCTION</h1></div>
          {projects[0].files.phase1}
      </div>
    </div>
  )
}

export default Content;
