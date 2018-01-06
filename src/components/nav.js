import React from 'react';
import ListGroup from './list-group';

export default props=>{
  return(
    <div id="accordion" role="tablist">
      <ul className="nav-type" role="tab">
        <li > <a data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne" >Prototypes</a> </li>
        <div id="collapseOne" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
          <ul className="list-group">
            <ListGroup />
          </ul>
        </div>
      </ul>
      <ul className="nav-type" role="tab">
        <li> <a data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="true" aria-controls="collapseTwo" >Projects</a> </li>
        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion" >
          <ul className="list-group">
            <ListGroup />
          </ul>
        </div>
      </ul>
    </div>
  )
}
