import ContactData from "../assets/json/Contact.json"

export default class Contact {

  constructor() {

    const contact = document.createElement('div')
    contact.className = 'contact';
    document.body.appendChild(contact);

    const contactContent = document.createElement('div')
    contactContent.className = 'contactContent';
    contact.appendChild(contactContent);

    const contactHeading = document.createElement('h2')
    contactHeading.className = 'contactHeading';
    contactHeading.textContent = ContactData.data[0].header;
    contactContent.appendChild(contactHeading)

    const contactText = document.createElement('p')
    contactText.className = 'contactText';
    contactText.innerHTML = ContactData.data[0].text;
    contactContent.appendChild(contactText);

    const contactForm = document.createElement('form');
    contactForm.className = 'form';
    contact.appendChild(contactForm);

    const inputName = document.createElement('input');
    inputName.className = 'input-name';
    inputName.setAttribute("placeholder", "Dit Navn");
    inputName.type = 'text'
    contactForm.appendChild(inputName);

    const inputPhone = document.createElement('input');
    inputPhone.className = 'input-Phone';
    inputPhone.setAttribute("placeholder", "Dit telefon nummer");
    inputPhone.type = 'tel'
    contactForm.appendChild(inputPhone);

    const inputMail = document.createElement('input');
    inputMail.className = 'input-Mail';
    inputMail.setAttribute("placeholder", "Din mail")
    inputMail.type = 'email'
    contactForm.appendChild(inputMail);

    const inputSubmit = document.createElement('button');
    inputSubmit.className = 'contactSubmit';
    inputSubmit.textContent = 'Ring mig op';
    contactForm.appendChild(inputSubmit)
  }
}