import gsap from 'gsap';
import SliderData from './json/data.json';

export default class Slider {

  constructor(header) {

    this.counter = 0;

    document.body.style.background = SliderData.data[0].bgcolor;

    const container = document.createElement('div');
    container.className = 'slider';

    document.body.appendChild(container);

    const btnNext = document.createElement('button');
    btnNext.className = 'btn btn-next';
    container.appendChild(btnNext);

    const btnPrev = document.createElement('button');
    btnPrev.className = 'btn btn-prev';
    container.appendChild(btnPrev);

    let sliderImg = document.createElement('img');
    sliderImg.className = 'slide';
    sliderImg.src = SliderData.data[0].img;
    container.appendChild(sliderImg);

    btnNext.addEventListener('click', () => {
      if (this.counter < SliderData.data.length - 1) {
        this.counter++;
        sliderImg.src = SliderData.data[this.counter].img;
        document.body.style.background = SliderData.data[this.counter].bgcolor;
        header.innerHTML = SliderData.data[this.counter].text;
        content.innerHTML = SliderData.data[this.counter].content;
      }
    });

    btnPrev.addEventListener('click', () => {
      if (this.counter > 0) {
        this.counter--;
        sliderImg.src = SliderData.data[this.counter].img;
        document.body.style.background = SliderData.data[this.counter].bgcolor;
        header.innerHTML = SliderData.data[this.counter].text;
        content.innerHTML = SliderData.data[this.counter].content;
      }
    });


    const content = document.createElement('div');
    content.className = "slider-content";
    content.innerHTML = SliderData.data[0].content
    document.body.appendChild(content);

  } // END constructor
} // END class
