import Hero from "./Hero";
import About from "./About";
import Interior from "./Interior";
import Model from "./Model";
import Slider from "./Slider"
import Contact from "./Contact";
import Footer from "./Footer";

export default class Initialize {

  constructor() {

    new Hero();

    new About();

    new Interior();

    /* new Model({
      showCameraPos: false,
      setCameraPos: [7, 12.3, -46, 6],
      showGrid: false,
      ambientLight: false,
      orbitControls: true,
      showFloor: true,
      lightHelp: false
    }); */

    new Slider();

    new Contact();

    new Footer();

  }
}