import React, {Component} from 'react';
import { DefaultPlayer as Videoz } from 'react-html5video';

import schedule_01 from './assets/img/schedule-01.jpg';
import schedule_02 from './assets/img/schedule-02.jpg';

import cover2 from './assets/img/video-cover-01.jpg';
import video2 from './assets/vid/pacific.mp4';

import cover4 from './assets/img/video-cover-02.jpg';
import video4 from './assets/vid/plastic.mp4';


import videoPoster from './assets/img/header-image-01.jpg';
import videoHeader from './assets/vid/header-video-01.mp4';


import poster from './assets/img/poster.jpg';



export default class Earthday extends Component {

  render() {

    return (

     <div>

     <div className="header_img_wrap">
    
           <video id="headerVid" poster={videoPoster} preload="auto" loop muted autoPlay src={videoHeader} type="video/mp4"></video>

     </div>

  


          


     <div className="page">
     

     <section>
 <h2>Welcome</h2>
     

     <p>
     Welcome to Manatee County Government to celebrate Earth Day and Water Conservation Month.
     </p>
     <p>
     Angela Collins, University of Florida/IFAS Extension Marine Agent, will present “Micro-Plastics 
     in our Environment.” as well as the Manatee County Agriculture and Extension Mobile Irrigation 
     Lab will be available to answer your questions about conserving water in the landscape.
     Browse the Manatee County Information Hub to learn more.
     </p>

     </section>






     <section>

     <h3>Speakers</h3>

     <div className="item">
     <img src={schedule_02} />
     <div className="description">
     <h4>Recycling and Processing</h4>
     <h5>10:30am - 11:30am</h5>
     <p><strong>Frank Cassagrande</strong><br />Director of Recycling Operations WastePro</p>
     </div>
     </div>

     <div className="item">
     <img src={schedule_01} />
     <div className="description">
     <h4>Microplastics and the Ocean</h4>
     <h5>12:00pm - 1:00pm</h5>
     <p><strong>Angela Collins, Ph.D.</strong><br />University of Florida, IFAS</p>
     </div>
     </div>

     </section>





     <section className="orange">
     <div className="item">
     <h3>Plastic Problem</h3>
     <img src={poster} />
     </div>
     </section>



     <section className="black">

     <h3>Videos</h3>

     <div className="item">
     <h4>World Earth Day 2018</h4>
     <Videoz controls={['PlayPause', 'Seek', 'Time']}
     poster={cover4}>
     <source src={video4} type="video/mp4" />
     </Videoz>

     <span className="small">via youtube <i className="fa fa-youtube-play" aria-hidden="true"></i></span>

     </div>



     <div className="item">
     <h4>The Great Pacific Garbage Patch</h4>
     <Videoz controls={['PlayPause', 'Seek', 'Time']}
     poster={cover2}>
     <source src={video2} type="video/mp4" />
     </Videoz>

     <span className="small">via youtube <i className="fa fa-youtube-play" aria-hidden="true"></i></span>

     </div>




     </section>

     </div>
     </div>



     );
  }



  componentDidMount () {

    window.scrollTo(0, 0);

  };
}

