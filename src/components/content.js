import React from 'react';
import ContentDetail  from './content-detail';
import Nav from './nav';
import projects from './project-content';
import prototypes from './prototype-content';
import resources from './resource-content';
import ReduxResource from '../contentData/resources/ReduxResource';
//      {!props.match.params.type || props.match.params.type==="prototypes"  ? prototype : project}
export default class Content extends React.Component{
  constructor(props){
      super(props);

      this.state={
        viewSwitch: false
      }

    this.viewSwitch=this.viewSwitch.bind(this)
    }

    viewSwitch(){
      this.setState({viewSwitch: !this.state.viewSwitch})
    }


  render(){
    const projectContent = projects.filter(content=>content.name===this.props.match.params.content);
    const prototypesContent = prototypes.filter(content=>content.name===this.props.match.params.content);
    const resourceContent = resources.filter(content=>content.name===this.props.match.params.content);
    const resource= resourceContent.forEach((content,i)=>{return content.files});
    const project = projectContent.map((content,i)=>{
    return <ContentDetail viewSwitch={this.viewSwitch}  key={i} name={content.name} contents={content.files} />
    });
    const prototype = prototypesContent.map((content,i)=>{
    return <ContentDetail viewSwitch={this.viewSwitch}  key={i} name={content.name} contents={content.files} />
    });

    return(
      <div id="main-content" className="row justify-content-md-center">
        <div className={this.state.viewSwitch?"hide" : "nav-container col-lg-3"}>
            <Nav projects={projects} prototypes={prototypes} resources={resources}/>
        </div>
        <div id="content" className={this.state.viewSwitch?"col-lg-12" : "col-lg-9"}>
          {
            !this.props.match.params.type || this.props.match.params.type==="resources"  ? <ReduxResource/> :
             this.props.match.params.type==="prototypes" ?  prototype : project
           }
        </div>
      </div>
    )
  }
}
