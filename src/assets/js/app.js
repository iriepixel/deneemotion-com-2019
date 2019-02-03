import $ from 'jquery';
import whatInput from 'what-input';
import {
  jarallax,
  jarallaxElement,
  jarallaxVideo
} from 'jarallax';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();
jarallaxElement();

jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.3
});

// jarallax(document.querySelectorAll('.jarallax'), {
//   speed: 0.2
// });
