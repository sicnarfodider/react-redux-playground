import React from 'react';




export default props=>{
  return(
    <div className="card text-center">
      <div className="redux-header card-header">
          Redux
      </div>
      <div className="card-block">
        <h3 className="card-title">Redux Introduction</h3>
        <p className="card-text">Redux is a predictable state container for JavaScript apps.
            (Not to be confused with a WordPress framework – Redux Framework.)

            It helps you write applications that behave consistently, run in different environments (client, server, and native),
            and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.
        </p>
        <footer className="text-right"><cite title="source">-redux.js.org</cite></footer>
        <h4> Links </h4>
        <ul className="link-holder">
          <li> <a className="resource-links" href="https://redux.js.org/" target="_blank"> <i className="fa fa-book mr-3" aria-hidden="true"></i>  Introduction </a> </li>
          <li> <a className="resource-links" href="https://egghead.io/courses/getting-started-with-redux"  target="_blank"> <i className="fa fa-video-camera mr-3" aria-hidden="true"></i> Starter Videos</a> </li>
          <li> <a className="resource-links"  href="https://egghead.io/courses/building-react-applications-with-idiomatic-redux" target="_blank"> <i className="fa fa-video-camera mr-3" aria-hidden="true"></i>  React with Idiomatic Redux</a> </li>
        </ul>
      </div>
    </div>
  )
}
