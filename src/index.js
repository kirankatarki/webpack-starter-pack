import _ from 'lodash';
import printMe from './print.js'
import '@popperjs/core';
import 'bootstrap';
import './style.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import $ from 'jquery';
import 'slick-carousel';

import { Linear } from 'gsap';
import ScrollMagic from 'scrollmagic';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;
  
    // element.appendChild(myIcon);

    // console.log(Data);
    // console.log(Notes);
    return element;
  }
  console.log('run index');
  document.body.appendChild(component());

  $(() => {
    $('.your-class').slick();
  });