import React from 'react';
import ContentDetail  from './content-detail';
import projects from './project-content';
import prototypes from './prototype-content';

export default props=>{
  const projectContent = projects.filter(content=>content.name===props.match.params.content);
  const prototypesContent = prototypes.filter(content=>content.name===props.match.params.content);
  const project = projectContent.map((content,i)=>{
  return <ContentDetail key={i} name={content.name} contents={content.files} />
  });
  const prototype = prototypesContent.map((content,i)=>{
  return <ContentDetail key={i} name={content.name} contents={content.files} />
  });
  return(
    <div id="content" className="col-lg-9">
      {!props.match.params.type || props.match.params.type==="prototypes"  ? prototype : project}
    </div>
  )
}
