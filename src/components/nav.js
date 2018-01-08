import React from 'react';
import {NavLink} from 'react-router-dom';


export default props=>{
  const project = props.projects.map((content,i)=>{
    return <li  className="list-group-item" key={i} ><NavLink className="nav-link" activeClassName="active" to={`/projects/${content.name}`}> {content.name} </NavLink> </li>
  });
  const prototype = props.prototypes.map((content,i)=>{
    return <li  className="list-group-item" key={i} ><NavLink className="nav-link" activeClassName="active" to={`/prototypes/${content.name}`}> {content.name}  </NavLink></li>
  });
  const resource = props.resources.map((content,i)=>{
    return <li  className="list-group-item" key={i} ><NavLink className="nav-link" activeClassName="active" to={`/resources/${content.name}`}> {content.name}  </NavLink></li>
  });
  return(
    <div id="accordion" role="tablist">
      <ul className="nav-type" role="tab">
        <li >
            <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne" >Prototypes</a>
        </li>
        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
          <ul className="list-group">
            {prototype}
          </ul>
        </div>
      </ul>
      <ul className="nav-type" role="tab">
        <li>
          <a data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="true" aria-controls="collapseTwo" >Projects</a>
        </li>
        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
          <ul className="list-group">
            {project}
          </ul>
        </div>
      </ul>
      <ul className="nav-type" role="tab">
        <li>
          <a data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="true" aria-controls="collapseThree" >Resources</a>
        </li>
        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
          <ul className="list-group">
            {resource}
          </ul>
        </div>
      </ul>
    </div>
  )
};
