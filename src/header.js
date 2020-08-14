const renderHeader = (() => {

  const render = () => {

    const header = document.createElement('header');
    const headerContents = document.createElement('div');
    headerContents.setAttribute('id', 'header-info');
    header.appendChild(headerContents);
    const address = document.createElement('address');

    const addressP1 = document.createElement('p');
    addressP1.setAttribute('id', 'name');
    addressP1.textContent = `Mario's Pizzeria`;
    const addressP2 = document.createElement('p');
    addressP2.classList.add('bar');
    addressP2.textContent = '|';
    const addressP3 = document.createElement('p');
    addressP3.textContent = '456 Pedro de Medici Blvd';
    const addressP4 = document.createElement('p');
    addressP4.classList.add('bar');
    addressP4.textContent = '|';
    const addressP5 = document.createElement('p');
    addressP5.textContent = '(012) 345-6789';

    address.appendChild(addressP1);
    address.appendChild(addressP2);
    address.appendChild(addressP3);
    address.appendChild(addressP4);
    address.appendChild(addressP5);
    headerContents.appendChild(address);

    const contactIcons = document.createElement('div');
    contactIcons.setAttribute('id', 'contact-icons');
    const contactLinks = document.createElement('div');
    contactLinks.classList.add('contact-links');

    const a1 = document.createElement('a');
    a1.setAttribute('id', 'fb-link');
    a1.setAttribute('href', '');
    a1.classList.add('btn');
    a1.classList.add('contact-icon');
    const fbLink = document.createElement('i');
    fbLink.classList.add('fab');
    fbLink.classList.add('fa-facebook-square');
    a1.appendChild(fbLink);
    contactLinks.appendChild(a1);

    const a2 = document.createElement('a');
    a2.setAttribute('id', 'insta-link');
    a2.setAttribute('href', '');
    a2.classList.add('btn');
    a2.classList.add('contact-icon');
    const instaLink = document.createElement('i');
    instaLink.classList.add('fab');
    instaLink.classList.add('fa-instagram');
    a2.appendChild(instaLink);
    contactLinks.appendChild(a2);

    const a3 = document.createElement('a');
    a3.setAttribute('id', 'email-link');
    a3.setAttribute('href', '');
    a3.classList.add('btn');
    a3.classList.add('contact-icon');
    const emailLink = document.createElement('i');
    emailLink.classList.add('fas');
    emailLink.classList.add('fa-envelope');
    a1.appendChild(emailLink);
    contactLinks.appendChild(a3);

    contactIcons.appendChild(contactLinks);
    header.appendChild(contactIcons);

    return header;
  }

  return {render};

})();

export {renderHeader};