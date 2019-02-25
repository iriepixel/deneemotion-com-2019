import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import {
  jarallax,
  jarallaxElement,
  jarallaxVideo
} from 'jarallax';

// import {
//   jarallax,
//   jarallaxElement,
//   jarallaxVideo
// } from 'jarallax';

// $(document).foundation();

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
  // $(document).foundation();
  jarallaxElement();

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
  });

});

document.getElementById('hamburger--js').addEventListener('click', function () {
  this.classList.toggle("is-active");
  document.querySelector('.menu-main-menu-container').classList.toggle('active');
});