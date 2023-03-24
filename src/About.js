import HeroData from "../assets/json/Hero.json";
import AboutData from "../assets/json/About.json";
import gsap from 'gsap';


export default class About {
  constructor() {

    const spec = document.createElement('div')
    spec.className = 'specification';
    document.body.appendChild(spec);

    HeroData.data[3].spec.forEach((item) => {
      const specItem = document.createElement('h2');
      specItem.className = "spec";
      specItem.textContent = item;
      spec.appendChild(specItem);
    })

    const aboutCar = document.createElement('section')
    aboutCar.className = "about"
    document.body.appendChild(aboutCar);

    const infoSection = document.createElement('div');
    infoSection.className = 'infoSection';
    aboutCar.appendChild(infoSection);

    const infotext = document.createElement('h2');
    infotext.className = 'infotext';
    infotext.textContent = AboutData.about[0].text;
    infoSection.appendChild(infotext);

    const infoContent = document.createElement('p');
    infoContent.className = 'aboutContent';
    infoContent.textContent = AboutData.about[0].content;
    infoSection.appendChild(infoContent);


    const infoimg = document.createElement('img');
    infoimg.className = 'info__car';
    infoimg.src = AboutData.about[0].img;
    aboutCar.appendChild(infoimg);

    const carCharge = document.createElement('img');
    carCharge.className = 'info__car';
    carCharge.src = AboutData.about[1].img;
    aboutCar.appendChild(carCharge);


    const chargeSection = document.createElement('div');
    chargeSection.className = 'chargeSection';
    aboutCar.appendChild(chargeSection);

    const carChargeText = document.createElement('h2');
    carChargeText.className = 'infotext';
    carChargeText.textContent = AboutData.about[1].text;
    chargeSection.appendChild(carChargeText)

    const carChargeContent = document.createElement('p');
    carChargeContent.className = 'aboutContent';
    carChargeContent.textContent = AboutData.about[1].content;
    chargeSection.appendChild(carChargeContent);


    const constructionSection = document.createElement('div');
    constructionSection.className = 'constructionSection';
    aboutCar.appendChild(constructionSection);

    const carPerformance = document.createElement('h2');
    carPerformance.className = 'infotext';
    carPerformance.textContent = AboutData.about[2].text;
    constructionSection.appendChild(carPerformance);

    const carPerformanceContent = document.createElement('p');
    carPerformanceContent.className = 'aboutContent';
    carPerformanceContent.textContent = AboutData.about[2].content;
    constructionSection.appendChild(carPerformanceContent);

    const carPerformanceImg = document.createElement('img');
    carPerformanceImg.className = 'info__car'
    carPerformanceImg.id = "carPerformanceImg"
    carPerformanceImg.src = AboutData.about[2].img;
    aboutCar.appendChild(carPerformanceImg)


  } // End constructor
} //End class