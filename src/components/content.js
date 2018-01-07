import React from 'react';
import ContentDetail  from './content-detail';
import projects from './project-content';
import prototypes from './prototype-content';
import Nav from '../components/nav';




export default class Content extends React.Component{
  constructor(props){
    super(props)
    this.state={
      contentViewSwitch: false
    }
    this.viewSwitch=this.viewSwitch.bind(this)
  }

  viewSwitch(){
    this.setState({
      contentViewSwitch: !this.state.contentViewSwitch
    })
  }


  render(){
    const {contentViewSwitch} = this.state;
    const projectContent = projects.filter(content=>content.name===this.props.match.params.content);
    const prototypesContent = prototypes.filter(content=>content.name===this.props.match.params.content);
    const project = projectContent.map((content,i)=>{
    return <ContentDetail key={i} viewSwitch={this.viewSwitch} name={content.name} contents={content.files} />
    });
    const prototype = prototypesContent.map((content,i)=>{
    return <ContentDetail key={i}viewSwitch={this.viewSwitch} name={content.name} contents={content.files} />
    });


    return(
      <div id="main-content"  className="row justify-content-md-center">
        <div className={contentViewSwitch ? "hide" : "nav-container col-lg-3" }>
            <Nav projects={projects} prototypes={prototypes}/>
        </div>
        <div id="content" className={contentViewSwitch?"col-lg-12": "col-lg-9"}>
          {!this.props.match.params.type || this.props.match.params.type==="prototypes"  ? prototype : project}
        </div>
      </div>
    )
  }
}
