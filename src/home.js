import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import video from './assets/vid/001.mp4';




export default class Home extends Component {

  render() {

    return (

      <div className="cover">
  
      <div id="feature">
      <h1>Earth Day 2018</h1>
      <span>Manatee County Earth Day Celebration <i className="fa fa-globe" aria-hidden="true"></i></span>
      <Link to="/earthday" className="btn color">Tap to Start <i className="fa fa-play" aria-hidden="true"></i></Link>
      </div>

      <video id="bgvid" preload="auto" loop muted autoPlay src={video} type="video/mp4"></video>
      </div>

      );
  }


  componentDidMount () {
    window.scrollTo(0, 0);
  };
}
