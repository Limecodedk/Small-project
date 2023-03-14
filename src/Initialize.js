import Slider from './Slider';
import gsap from 'gsap';

export default class Initialize {

  constructor() {

    document.body.style.background = 'linear-gradient(to right, rgba(0, 112, 205, 1), rgba(33, 247, 177, 1), rgba(66, 106, 140, 1))';

    const header = document.createElement('header');
    header.className = 'pageheader';
    header.innerHTML = '<h2>Aurora</h2>';
    document.body.appendChild(header);

    /* Slider */

    new Slider(header);

    /* Slider end */

    const footer = document.createElement('footer');
    footer.className = "pagefooter";
    document.body.appendChild(footer);

  } // END constructor
} // END class
