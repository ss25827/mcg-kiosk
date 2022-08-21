import React, {Component} from 'react';

import videoPoster_04 from './assets/img/header-image-04.jpg';
import videoHeader_04 from './assets/vid/header-video-04.mp4';


export default class Pledge extends Component {

  render() {

    return (

    <div>

     <div className="header_img_wrap">
           <video id="headerVid" poster={videoPoster_04} preload="auto" loop muted autoPlay src={videoHeader_04} type="video/mp4"></video>
     </div>

     <div className="page">
 
     <section>
     <h2>Take the Pledge</h2>

     <p>
      Plastic pollution is poisoning our oceans and land, injuring marine life, and affecting our health! Help End Plastic Pollution by finding out how many plastic items you consume
      every year and make a PLEDGE to reduce the amount. Earth Day 2018 is dedicated to providing the information and inspiration needed to fundamentally
      change human attitude and behavior about plastics.
     </p>


      <form className="contact-form" method="POST" action="/contact">
      <div className="form-field">
      <label htmlFor="name">
      <div className="label-content">Name:</div>
      <input type="text" name="name" required />
      </label>
      </div>

      <div className="form-field">
      <label htmlFor="email">
      <div className="label-content">Email:</div>
      <input type="email" name="email" required />
      </label>
      </div>

      <button className="btn color" type="submit">Sign Up! <i className="fa fa-share" aria-hidden="true"></i></button>
      </form>
      <hr />
      </section>
    </div>
    </div>
 );
}

  componentDidMount () {
    window.scrollTo(0, 0);
  };
}
