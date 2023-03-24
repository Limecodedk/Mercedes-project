import SliderData from "../assets/json/Slider.json";
import gsap from "gsap";

export default class Slider {
  constructor() {
    this.counter = 0;

    const sliderSection = document.createElement('section');
    sliderSection.className = 'sliderContainer';
    document.body.appendChild(sliderSection);

    const sliderImg = document.createElement('img');
    sliderImg.className = 'slide'
    sliderImg.id = 'slider'
    sliderImg.src = SliderData.data[0].img;
    sliderSection.appendChild(sliderImg);

    const sliderHeading = document.createElement('h2');
    sliderHeading.className = 'sliderHeading'
    sliderHeading.textContent = SliderData.data[0].heading;
    sliderSection.appendChild(sliderHeading);

    const sliderText = document.createElement('p');
    sliderText.className = 'sliderText'
    sliderText.textContent = SliderData.data[0].text;
    sliderSection.appendChild(sliderText);

    const btnContainer = document.createElement('div')
    btnContainer.className = 'BtnContainer';
    sliderSection.appendChild(btnContainer);

    const btnPrev = document.createElement('img');
    btnPrev.src = SliderData.button[0].prev;
    btnPrev.className = 'btn btn-prev';
    btnContainer.appendChild(btnPrev);

    const btnNext = document.createElement('img');
    btnNext.src = SliderData.button[0].next;
    btnNext.className = 'btn btn-next';
    btnContainer.appendChild(btnNext);

    btnPrev.addEventListener('click', () => {
      if (this.counter > 0) {
        this.counter--;
        sliderImg.src = SliderData.data[this.counter].img;
        sliderHeading.textContent = SliderData.data[this.counter].heading;
        sliderText.textContent = SliderData.data[this.counter].text;
        gsap.to(sliderImg, {
          scale: 0,
          repeat: 1,
          transformOrigin: "center",
          yoyo: true,
        });
      }
    })

    btnNext.addEventListener('click', () => {
      if (this.counter < SliderData.data.length - 1) {
        this.counter++;
        sliderImg.src = SliderData.data[this.counter].img;
        sliderHeading.textContent = SliderData.data[this.counter].heading;
        sliderText.textContent = SliderData.data[this.counter].text;
        gsap.to(sliderImg, {
          scale: 2,
          repeat: 1,
          transformOrigin: "center",
          yoyo: true,
        });
      }
    })

  } //End constructor
} // End Class