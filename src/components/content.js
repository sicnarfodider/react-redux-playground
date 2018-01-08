import React from 'react';
import ContentDetail  from './content-detail';
import projects from './project-content';
import prototypes from './prototype-content';
import resources from './resource-content';
import ReduxResource from '../contentData/resources/ReduxResource';
//      {!props.match.params.type || props.match.params.type==="prototypes"  ? prototype : project}
export default props=>{

  const projectContent = projects.filter(content=>content.name===props.match.params.content);
  const prototypesContent = prototypes.filter(content=>content.name===props.match.params.content);
  const resourceContent = resources.filter(content=>content.name===props.match.params.content);
  const resource= resourceContent.forEach((content,i)=>{return content.files});
  const project = projectContent.map((content,i)=>{
  return <ContentDetail key={i} name={content.name} contents={content.files} />
  });
  const prototype = prototypesContent.map((content,i)=>{
  return <ContentDetail key={i} name={content.name} contents={content.files} />
  });

  debugger;
  return(
    <div id="content" className="col-lg-9">
      {
        !props.match.params.type || props.match.params.type==="resources"  ? <ReduxResource/> :
         props.match.params.type==="prototypes" ?  prototype : project
       }
    </div>
  )
}
