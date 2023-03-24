import InteriorSlider from "../assets/json/InteriorSlider.json";
import gsap from "gsap";

export default class Interior {
  constructor() {

    const interior = document.createElement('section')
    interior.className = 'interior';
    document.body.appendChild(interior);

    const interiorContent = document.createElement('div');
    interiorContent.className = 'interiorContent';
    interior.appendChild(interiorContent)

    this.interiorSlider = document.createElement('img');
    this.interiorSlider.className = 'interiorSlider'
    this.interiorSlider.src = InteriorSlider.data[0].img;
    interior.appendChild(this.interiorSlider);

    this.interiorHeading = document.createElement('h2');
    this.interiorHeading.className = "interiorHeading";
    this.interiorHeading.textContent = InteriorSlider.data[0].heading;
    interiorContent.appendChild(this.interiorHeading);

    this.interiorText = document.createElement('p');
    this.interiorText.className = "interiorText";
    this.interiorText.textContent = InteriorSlider.data[0].text;
    interiorContent.appendChild(this.interiorText);


    const interiorMenu = document.createElement('div')
    interiorMenu.className = 'interiorNav';
    interior.appendChild(interiorMenu);

    InteriorSlider.data.forEach((item) => {
      const interiorNav = document.createElement('h2');
      interiorNav.className = "interiorMenu";
      interiorNav.textContent = item.plads;
      interiorMenu.appendChild(interiorNav);

      interiorNav.addEventListener('click', () => {
        this.interiorSlider.src = item.img;
        this.interiorHeading.textContent = item.heading;
        this.interiorText.textContent = item.text;

        gsap.to(this.interiorSlider, {
          duration: 0.05,
          rotate: 1,
          scale: 0.9,
          repeat: 3,
          yoyo: true,
        });

      })
    })

  } // END constructor
} // END class
