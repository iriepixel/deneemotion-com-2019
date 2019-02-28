import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import {
  jarallax,
  jarallaxElement,
} from 'jarallax';

import AOS from 'aos';

document.addEventListener("DOMContentLoaded", function () {
  // Handler when the DOM is fully loaded
  // $(document).foundation();

  jarallaxElement();

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.5
  });

});

AOS.init();

document.getElementById('hamburger--js').addEventListener('click', function () {
  this.classList.toggle("is-active");
  document.querySelector('.menu-main-menu-container').classList.toggle('active');
});