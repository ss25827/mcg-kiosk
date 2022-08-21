import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';


import header_img_02 from './assets/img/header-image-02.jpg';

import event_01 from './assets/img/event-01.jpg';
import event_01_large from './assets/img/event-01-large.jpg';
import event_02 from './assets/img/event-02.jpg';
import event_02_large from './assets/img/event-02-large.jpg';
import event_03 from './assets/img/event-03.jpg';
import event_03_large from './assets/img/event-03-large.jpg';
import event_04 from './assets/img/event-04.jpg';
import event_04_large from './assets/img/event-04-large.jpg';
import event_05 from './assets/img/event-05.jpg';
import event_05_large from './assets/img/event-05-large.jpg';

import videoPoster_02 from './assets/img/header-image-02.jpg';
import videoHeader_02 from './assets/vid/header-video-02.mp4';

var PhotoSwipe = require('photoswipe');
var PhotoSwipeUIDefault = require('photoswipe/dist/photoswipe-ui-default');



export default class Events extends Component {

  render() {

    return (
      <div>
     <div className="header_img_wrap">
           <video id="headerVid" poster={videoPoster_02} preload="auto" loop muted autoPlay src={videoHeader_02} type="video/mp4"></video>
     </div>

      <div className="page">
      

      <div className="pswp"  role="dialog" aria-hidden="true">
      <div className="pswp__bg"></div>
      <div className="pswp__scroll-wrap">

      <div className="pswp__container">
      <div className="pswp__item"></div>
      <div className="pswp__item"></div>
      <div className="pswp__item"></div>
      </div>


      <div className="pswp__ui pswp__ui--hidden">

      <div className="pswp__top-bar">

      <div className="pswp__counter"></div>

      <button className="pswp__button pswp__button--close" title="Close (Esc)"></button>

      <button className="pswp__button pswp__button--share" title="Share"></button>

      <button className="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

      <button className="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

      <div className="pswp__preloader">
      <div className="pswp__preloader__icn">
      <div className="pswp__preloader__cut">
      <div className="pswp__preloader__donut"></div>
      </div>
      </div>
      </div>
      </div>

      <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
      <div className="pswp__share-tooltip"></div> 
      </div>

      <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
      </button>

      <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
      </button>

      <div className="pswp__caption">
      <div className="pswp__caption__center"></div>
      </div>

      </div>
      </div>
      </div>



      <section>

      <h2>Events</h2>



      <div className="item">
      <div className="gallery" data-pswp-uid="3">
      <a href={event_03_large} data-size="1080x1440">
      <img src={event_03} />
      </a>
      </div> 
      <div className="description">
      <h4>Regional Try Transit Day</h4>
      <h5><i className="fa fa-calendar-check-o" aria-hidden="true"></i> April 20, 2018</h5>
      <p>The “Regional Try Transit Day” will offer discount specials, free rides, passes, and prizes for commuters.  It is a great opportunity 
      for new riders to learn about their County’s bus systems and try out public transit to various destinations. It is also an opportunity 
        to acknowledge and reward existing users
      </p>
      </div>
      </div>



      <div className="item">
      <div className="gallery" data-pswp-uid="5">
      <a href={event_05_large} data-size="1080x1440">
      <img src={event_05} />
      </a>
      </div> 
      <div className="description">
      <h4>Teen Recycled Dreams Fashion Show</h4>
       <h5><i className="fa fa-calendar-check-o" aria-hidden="true"></i> April 21, 2018</h5>
      <p>Join Sunshine Community Compost during International Compost Awareness Week  for Florida’s first ever Compost-A-Thon</p>
      </div>
      </div>



      <div className="item">
      <div className="gallery" data-pswp-uid="2">
      <a href={event_02_large} data-size="1080x1440">
      <img src={event_02} />
      </a>
      </div> 
      <div className="description">
      <h4>Earth Day Culinary Celebration</h4>
      <h5><i className="fa fa-calendar-check-o" aria-hidden="true"></i> April 22, 2018</h5>
      <p>Delicious seafood selections from The Sandbar Restaurant, Beach House Restaurant and Mar Vista Restaurant plus ... Door prize drawing and Silent Auction</p>
      </div>
      </div>


      <div className="item">
      <div className="gallery" data-pswp-uid="1">
      <a href={event_01_large} data-size="1080x1440">
      <img src={event_01} />
      </a>
      </div> 
      <div className="description">
      <h4>Compost-A-Thon</h4>
      <h5><i className="fa fa-calendar-check-o" aria-hidden="true"></i> May 12, 2018</h5>
      <p>Join Sunshine Community Compost during  International Compost Awareness Week  for Florida’s first ever Compost-A-Tho</p>
      </div>
      </div>





      <div className="item">
      <div className="gallery" data-pswp-uid="4">
      <a href={event_04_large} data-size="1080x1440">
      <img src={event_04} />
      </a>
      </div> 
      <div className="description">
      <h4>Green Movies That Matter</h4>
       <h5><i className="fa fa-calendar-check-o" aria-hidden="true"></i> April - September 2018</h5>
      <p>USGBC Florida Presents: Green Movies That Matter ... Movies fostering dialogue and awareness about sustainability through the power of film and community</p>
      </div>
      </div>



      </section>




      </div>
      </div>


      );
}



componentDidMount () {

  var initPhotoSwipeFromDOM = function(gallerySelector) {

    var parseThumbnailElements = function(el) {
      var thumbElements = el.childNodes,
      numNodes = thumbElements.length,
      items = [],
      el,
      childElements,
      thumbnailEl,
      size,
      item;

      for(var i = 0; i < numNodes; i++) {
        el = thumbElements[i];

              // include only element nodes 
              if(el.nodeType !== 1) {
                continue;
              }

              childElements = el.children;

              size = el.getAttribute('data-size').split('x');

              // create slide object
              item = {
                src: el.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                author: el.getAttribute('data-author')
              };

              item.el = el; // save link to element for getThumbBoundsFn

              if(childElements.length > 0) {
                item.msrc = childElements[0].getAttribute('src'); // thumbnail url
                if(childElements.length > 1) {
                    item.title = childElements[1].innerHTML; // caption (contents of figure)
                  }
                }


                var mediumSrc = el.getAttribute('data-med');
                if(mediumSrc) {
                  size = el.getAttribute('data-med-size').split('x');
                  // "medium-sized" image
                  item.m = {
                    src: mediumSrc,
                    w: parseInt(size[0], 10),
                    h: parseInt(size[1], 10)
                  };
                }
                // original image
                item.o = {
                  src: item.src,
                  w: item.w,
                  h: item.h
                };

                items.push(item);
              }

              return items;
            };

      // find nearest parent element
      var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
      };

      var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        var clickedListItem = closest(eTarget, function(el) {
          return el.tagName === 'A';
        });

        if(!clickedListItem) {
          return;
        }

        var clickedGallery = clickedListItem.parentNode;

        var childNodes = clickedListItem.parentNode.childNodes,
        numChildNodes = childNodes.length,
        nodeIndex = 0,
        index;

        for (var i = 0; i < numChildNodes; i++) {
          if(childNodes[i].nodeType !== 1) { 
            continue; 
          }

          if(childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
          }
          nodeIndex++;
        }

        if(index >= 0) {
          openPhotoSwipe( index, clickedGallery );
        }
        return false;
      };

      var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

          if(hash.length < 5) { // pid=1
            return params;
          }

          var vars = hash.split('&');
          for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
              continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
              continue;
            }           
            params[pair[0]] = pair[1];
          }

          if(params.gid) {
            params.gid = parseInt(params.gid, 10);
          }

          return params;
        };

        var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;

          items = parseThumbnailElements(galleryElement);

          // define options (if needed)
          options = {

            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                  // See Options->getThumbBoundsFn section of docs for more info
                  var thumbnail = items[index].el.children[0],
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect(); 

                  return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                },

                addCaptionHTMLFn: function(item, captionEl, isFake) {
                  if(!item.title) {
                    captionEl.children[0].innerText = '';
                    return false;
                  }
                  captionEl.children[0].innerHTML = item.title +  '<br/><small>Photo: ' + item.author + '</small>';
                  return true;
                },

              };


              if(fromURL) {
                if(options.galleryPIDs) {
              // parse real index when custom PIDs are used 
              // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
              for(var j = 0; j < items.length; j++) {
                if(items[j].pid == index) {
                  options.index = j;
                  break;
                }
              }
            } else {
              options.index = parseInt(index, 10) - 1;
            }
          } else {
            options.index = parseInt(index, 10);
          }

          // exit if index not found
          if( isNaN(options.index) ) {
            return;
          }



          var radios = document.getElementsByName('gallery-style');
          for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
              if(radios[i].id == 'radio-all-controls') {

              } else if(radios[i].id == 'radio-minimal-black') {
                options.mainClass = 'pswp--minimal--dark';
                options.barsSize = {top:0,bottom:0};
                options.captionEl = false;
                options.fullscreenEl = false;
                options.shareEl = true;
                options.bgOpacity = 0.85;
                options.tapToClose = true;
                options.tapToToggleControls = false;
              }
              break;
            }
          }

          if(disableAnimation) {
            options.showAnimationDuration = 0;
          }

          // Pass data to PhotoSwipe and initialize it
          gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

          // see: http://photoswipe.com/documentation/responsive-images.html
          var realViewportWidth,
          useLargeImages = false,
          firstResize = true,
          imageSrcWillChange;

          gallery.listen('beforeResize', function() {

            var dpiRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
            dpiRatio = Math.min(dpiRatio, 2.5);
            realViewportWidth = gallery.viewportSize.x * dpiRatio;


            if(realViewportWidth >= 1200 || (!gallery.likelyTouchDevice && realViewportWidth > 800) || screen.width > 1200 ) {
              if(!useLargeImages) {
                useLargeImages = true;
                imageSrcWillChange = true;
              }

            } else {
              if(useLargeImages) {
                useLargeImages = false;
                imageSrcWillChange = true;
              }
            }

            if(imageSrcWillChange && !firstResize) {
              gallery.invalidateCurrItems();
            }

            if(firstResize) {
              firstResize = false;
            }

            imageSrcWillChange = false;

          });

          gallery.listen('gettingData', function(index, item) {
            if( useLargeImages ) {
              item.src = item.o.src;
              item.w = item.o.w;
              item.h = item.o.h;
            }
          });

          gallery.init();
        };

      // select all gallery elements
      var galleryElements = document.querySelectorAll( gallerySelector );
      for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
      }

      // Parse URL and open gallery if it contains #&pid=3&gid=1
      var hashData = photoswipeParseHash();
      if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid,  galleryElements[ hashData.gid - 1 ], true, true );
      }
    };

    initPhotoSwipeFromDOM('.gallery');
    window.scrollTo(0, 0);


  };

}