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
} from 'jarallax';

import AOS from 'aos';

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
  // $(document).foundation();

  AOS.init({
    offset: 150,
    duration: 600,
    once: true
  });

  jarallaxElement();

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
  });

});

document.getElementById('hamburger--js').addEventListener('click', function () {
  this.classList.toggle("is-active");
  document.querySelector('.menu-main-menu-container').classList.toggle('active');
});