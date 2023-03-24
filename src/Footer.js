import footerData from '../assets/json/footer.json'

export default class Footer {
  constructor() {

    const footer = document.createElement('div')
    footer.className = 'footer';
    document.body.appendChild(footer);

    const footerLogo = document.createElement('img');
    footerLogo.className = 'footerLogo';
    footerLogo.src = footerData.data[0].img;
    footer.appendChild(footerLogo);

    const footerCopyright = document.createElement('p')
    footerCopyright.className = 'copyright';
    footerCopyright.textContent = footerData.data[0].text
    footer.appendChild(footerCopyright);

  }
}