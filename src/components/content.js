import React from 'react';
import ContentSummary from './content-summary';
import ContentDetail  from './content-detail';

export default props=>{
  return(
    <div id="content" className="col-lg-9">
      <ContentDetail projects={props.projects} prototypes={props.prototypes}/>
    </div>
  )
}
