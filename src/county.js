import React, {Component} from 'react';

import { DefaultPlayer as Videoz } from 'react-html5video';
import cover1 from './assets/img/video-cover-02.jpg';
import video1 from './assets/vid/recycle.mp4';

import cover3 from './assets/img/video-cover-04.jpg';
import video3 from './assets/vid/wastepro.mp4';

import videoPoster_02 from './assets/img/header-image-02.jpg';
import videoHeader_02 from './assets/vid/header-video-02.mp4';

import county_01 from './assets/img/county-01.jpg';
import county_02 from './assets/img/county-02.jpg';
import county_03 from './assets/img/county-03.jpg';
import county_04 from './assets/img/county-04.jpg';
import county_05 from './assets/img/county-05.jpg';
import county_06 from './assets/img/county-06.jpg';
import county_08 from './assets/img/county-08.jpg';



export default class County extends Component {

  render() {

    return (

      <div>

<div className="header_img_wrap">
           <video id="headerVid" poster={videoPoster_02} preload="auto" loop muted autoPlay src={videoHeader_02} type="video/mp4"></video>
     </div>


      <div className="page">
      
      
      <section>
      <h2>County Initiatives</h2>

      <p>
      Manatee County continues to gain recognition for innovative sustainable and energy efficient
      practices and has recently been awarded Platinum Level Certification by the Florida Green 
      Buildings Coalition (FGBC). Manatee County is now the first and only County Government in 
      the State of Florida to earn Platinum Level Certification from FGBC. This multi-faceted 
      achievement demonstrates the County’s responsible dedication and leadership to the 
      environment and socioeconomic welfare. Manatee County is working smarter and more efficiently 
      with the innovative leadership and input from community stakeholders, who provide ideas and 
      concerns on issues regarding expanding social structures, environmental concerns, and the 
      financial and legal responsibilities throughout the community. Manatee County has shown 
      strong leadership by developing sustainable and energy infrastructures and policies that 
      will leave a positive impact for many generations to come. 
      </p>

      </section>








      <section>

      <h3>Initiatives</h3>




      <div className="item">

      <img src={county_01} />

      <div className="description">
      <h4>Certified Platinum</h4>
      
      <p>
      The Florida Green Building Coalition is the leading certifier of green projects in Florida. 
      To date it has fifteen thousand residential, over twenty-four million square feet. of commercial 
      and high-rise, fifty-three land developments, and 86 local governments participating in its 
      certification programs. FGBC certification programs are the only standards developed with climate 
      specific criteria to address issues caused by Florida’s hot-humid environment and natural disasters.
      </p>
      </div>
      </div>


      <div className="item">
      <img src={county_02} />
      <div className="description">
      <h4>Chiller Water-Cooling Plant</h4>
      
      <p>
      The downtown energy-efficient chiller plant uses cold water to “chill” the air and then 
      pushes it to the Administration, Property Appraiser and Central Library buildings. The 
      plant has tremendous long-term cost savings, takes up less space than multiple individual 
      A/C units and has a lifespan around 30 years.
      </p>

      </div>
      </div>



      <div className="item">
      <img src={county_03} />
      <div className="description">
      <h4>Battle of the Buildings</h4>
      
      <p>
      In 2015, Manatee County placed 14th in energy reduction within the United States with the 
      EPA's Battle of the Building contest.  The downtown buildings lowered energy consumption by 
      more than seven percent and reduced carbon emissions by seven-point-two tons.
      </p>

      </div>
      </div>



      <div className="item">
      <img src={county_04} />
      <div className="description">
      <h4>Transportation</h4>
      
      <p>
      The Florida Public Transportation Association (FPTA) awarded Manatee County the prestigious 2016 
      Innovation and Creativity Award for Skyway ConneXion 
      </p>

      <p>
      Manatee County received first place from the Tampa Bay Regional Planning Council for the Skyway 
      ConneXion regional express bus service at the 25th annual Future of the Region Awards.
      </p>

      </div>
      </div>



      <div className="item">
      <img src={county_05} />
      <div className="description">
      <h4>The Quick Response Vehicle</h4>
      
      <p>Manatee County Emergency Medical Services introduced a new lifesaving, environmentally friendly and fuel efficient rapid response vehicle to patrol the
       County’s barrier island and beaches to reduce response time and negative environmental impacts. </p>

      </div>
      </div>



      <div className="item">
      <img src={county_06} />
      <div className="description">
      <h4>Robinson Preserve Wetlands</h4>
      
      <p>Manatee County Parks and Natural Resources Department opened the Mosaic Center for Nature, Exploration, Science and Technology (The Mosaic NEST), 
      part of the Robinson Preserve Wetlands Restoration project.</p>

      <p>The NEST is surrounded by 150 acres of the Robinson Preserve expansion, which, when completed, will include canoe and kayak launches, mangrove 
      islands, a 5k track, a jogging and walking trail, freshwater ponds for a sport fish nursery, restored wetlands and a connection to the existing 
      preserve.  </p>

      </div>
      </div>





      <div className="item">
      <img src={county_08} />
      <div className="description">
      <h4>Sea Levels</h4>
      
      <p>Sea level rise is an increase in global mean sea level because of an increase in the volume of water in the world's oceans Sea level rise is usually attributed to global climate change by thermal expansion of the water in the oceans and by melting of ice sheets and glaciers on land.</p>
      <p>Visualize community-level impacts from coastal flooding or sea level rise simulations and how flooding might impact local landmarks, water depth, connectivity, flood frequency, socio-economic vulnerability, wetland loss and migration, and mapping confidence.</p>

      </div>
      </div>


      </section>






      <section className="orange">
      <h3>Energy</h3>
      <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYjZiMTU0OWEtYWE0Ni00NTcxLWE4ODEtYzIyYzI0YWE0MjY5IiwidCI6ImNiZjE4NTg3LTc0MjItNDBmMi1hOGYyLWVhYTNhNGVhNDI0MCIsImMiOjF9" 
      width="580" height="385" frameborder="0" allowfullscreen="true"></iframe> 

      <div className="iframers"></div>
      </section>




      <section className="black">

      <h3>Videos</h3>

     <div className="item">
     <h4>Waste Pro</h4>
      <Videoz controls={['PlayPause', 'Seek', 'Time']} poster={cover3}>
      <source src={video3} type="video/mp4" />
      </Videoz>

     <span className="small">via youtube <i className="fa fa-youtube-play" aria-hidden="true"></i></span>

     </div>





     <div className="item">
     <h4>Recycle All Together, Recycle Right</h4>
      <Videoz controls={['PlayPause', 'Seek', 'Time']}
      poster={cover1}>
      <source src={video1} type="video/mp4" />
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
