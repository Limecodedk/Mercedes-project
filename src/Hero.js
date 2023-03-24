import HeroData from "../assets/json/Hero.json";

export default class Hero {
  constructor() {

    const hero = document.createElement('div')
    hero.className = 'hero';
    document.body.appendChild(hero);

    const headerBg = document.createElement('img');
    headerBg.className = 'hero-img';
    headerBg.src = HeroData.data[2].bg;
    hero.appendChild(headerBg);

    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = HeroData.data[0].logo;
    hero.appendChild(logo);

    const menuContainer = document.createElement('nav');
    menuContainer.className = "pageheadernav"
    hero.appendChild(menuContainer);

    const menuItemContainer = document.createElement('ul')
    menuItemContainer.className = "topnav";
    menuContainer.appendChild(menuItemContainer);

    HeroData.data[1].nav.forEach((item) => {
      const menuItem = document.createElement('li');
      menuItem.className = "nav";
      menuItem.textContent = item;
      menuItemContainer.appendChild(menuItem);
    })

    const content = document.createElement('h1');
    content.className = 'headertext';
    content.textContent = HeroData.data[4].text;
    hero.appendChild(content);

    const btncontainer = document.createElement('div');
    btncontainer.className = 'btn_container';
    hero.appendChild(btncontainer);

    const btnconfig = document.createElement('btn');
    btnconfig.className = 'btn_config';
    btnconfig.textContent = HeroData.data[5].btn_conf;
    btncontainer.appendChild(btnconfig);

    const btnBuy = document.createElement('btn');
    btnBuy.className = 'btn_Buy';
    btnBuy.textContent = HeroData.data[5].btn_buy;
    btncontainer.appendChild(btnBuy);

  } //End constructor
} // End Class