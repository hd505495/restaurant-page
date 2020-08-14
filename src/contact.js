import {renderHeader} from './header';
import {renderFooter} from './footer';
import {renderHome} from './home';
import {renderMenu} from './menu';

const renderContact = (() => {

  const container = document.getElementById('content');

  const _clearPage = () => {
    let child = container.lastChild;
    while(child) {
      container.removeChild(child);
      child = container.lastChild;
    }
  }

  const render = () => {
    _clearPage();

    // render header
    const header = renderHeader.render();
    container.appendChild(header);

    // render body

    // main div and first tab (home tab)
    const main = document.createElement('section');
    main.classList.add('main');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const tabOne = document.createElement('input');
    tabOne.setAttribute('type', 'radio');
    tabOne.setAttribute('name', 'tabs');
    tabOne.setAttribute('id', 'tabone');
    tabs.appendChild(tabOne);
    const labelOne = document.createElement('label');
    labelOne.setAttribute('for', 'tabone');
    labelOne.textContent = 'Home';
    tabs.appendChild(labelOne);
    tabOne.addEventListener('click', renderHome.render);

    // home tab content
   /* const homeContent = document.createElement('div');
    homeContent.classList.add('tab');
    homeContent.setAttribute('id', 'homeTab');
    const contentText = document.createElement('h1');
    contentText.setAttribute('id', 'homeHeader');
    contentText.textContent = 'Serving Your ';
    const typingText = document.createElement('div');
    typingText.classList.add('text-primary');
    typingText.classList.add('txt-type');
    typingText.dataset.wait = 3000;
    typingText.dataset.words = ['Cravings', 'Favorites', 'Family', 'Friends', 'Hunger'];

    contentText.appendChild(typingText);
    homeContent.appendChild(contentText);
    tabs.appendChild(homeContent);
    */

    // second tab (menu tab), menu content loaded on click event
    const tabTwo = document.createElement('input');
    tabTwo.setAttribute('type', 'radio');
    tabTwo.setAttribute('name', 'tabs');
    tabTwo.setAttribute('id', 'tabtwo');
    tabs.appendChild(tabTwo);
    const labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'tabtwo');
    labelTwo.textContent = 'Menu';
    tabs.appendChild(labelTwo);
    tabTwo.addEventListener('click', renderMenu.render);

    // third tab (contact tab), contact content loaded on click event
    const tabThree = document.createElement('input');
    tabThree.setAttribute('type', 'radio');
    tabThree.setAttribute('name', 'tabs');
    tabThree.setAttribute('id', 'tabthree');
    tabOne.setAttribute('checked', 'checked');
    tabs.appendChild(tabThree);
    const labelThree = document.createElement('label');
    labelThree.setAttribute('for', 'tabthree');
    labelThree.textContent = 'Contact';
    tabs.appendChild(labelThree);

    // contact tab contents
    const contact = document.createElement('div');
    contact.classList.add('tab');
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact & Location';
    contact.appendChild(contactHeader);
    const contactContent = document.createElement('div');
    contactContent.setAttribute('id', 'contactContent');
    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('id', 'contact');

    const phone = document.createElement('div');
    phone.setAttribute('id', 'phone');
    const phoneTitle = document.createElement('h2');
    phoneTitle.textContent = 'Phone';
    phone.appendChild(phoneTitle);
    const number = document.createElement('p');
    number.textContent = '(012) 345-6789';
    phone.appendChild(number);
    contactInfo.appendChild(phone);

    const email = document.createElement('div');
    email.setAttribute('id', 'email');
    const emailTitle = document.createElement('h2');
    emailTitle.textContent = 'Email';
    email.appendChild(emailTitle);
    const emailAddress = document.createElement('p');
    emailAddress.textContent = 'mariospizzeria@hotmail.com';
    email.appendChild(emailAddress);
    contactInfo.appendChild(email);

    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Business Hours';
    hours.appendChild(hoursTitle);
    const dayTimes = document.createElement('div');
    dayTimes.setAttribute('id', 'dayTimes');
    const monday = document.createElement('p');
    monday.textContent = 'Monday 10:00am - 9:00pm';
    dayTimes.appendChild(monday);
    const tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday 10:00am - 9:00pm';
    dayTimes.appendChild(tuesday);
    const wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday 10:00am - 9:00pm';
    dayTimes.appendChild(wednesday);
    const thursday = document.createElement('p');
    thursday.textContent = 'Thursday 10:00am - 9:00pm';
    dayTimes.appendChild(thursday);
    const friday = document.createElement('p');
    friday.textContent = 'Friday 10:00am - 11:00pm';
    dayTimes.appendChild(friday);
    const saturday = document.createElement('p');
    saturday.textContent = 'Saturday 10:00am - 11:00pm';
    dayTimes.appendChild(saturday);
    const sunday = document.createElement('p');
    sunday.textContent = 'Sunday 12:00pm - 8:00pm';
    dayTimes.appendChild(sunday);
    hours.appendChild(dayTimes);
    contactInfo.appendChild(hours);
    contactContent.appendChild(contactInfo);

    const maps = document.createElement('div');
    maps.setAttribute('id', 'maps');
    maps.setAttribute('style', 'width:350px;height:350px;');
    contactContent.appendChild(maps);
    contact.appendChild(contactContent);

    tabs.appendChild(contact);
    main.appendChild(tabs);
    container.appendChild(main);

    //render footer
    const footer = renderFooter.render();
    container.appendChild(footer);

  }

  return {render};

})();

export {renderContact};