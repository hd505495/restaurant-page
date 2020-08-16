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
    tabOne.addEventListener('click', renderHome.render);
    tabs.appendChild(tabOne);
    const labelOne = document.createElement('label');
    labelOne.setAttribute('for', 'tabone');
    labelOne.textContent = 'Home';
    tabs.appendChild(labelOne);

    // second tab (menu tab), menu content loaded on click event
    const tabTwo = document.createElement('input');
    tabTwo.setAttribute('type', 'radio');
    tabTwo.setAttribute('name', 'tabs');
    tabTwo.setAttribute('id', 'tabtwo');
    tabTwo.addEventListener('click', renderMenu.render);
    tabs.appendChild(tabTwo);
    const labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'tabtwo');
    labelTwo.textContent = 'Menu';
    tabs.appendChild(labelTwo);

    // third tab (contact tab)
    const tabThree = document.createElement('input');
    tabThree.setAttribute('type', 'radio');
    tabThree.setAttribute('name', 'tabs');
    tabThree.setAttribute('id', 'tabthree');
    tabThree.setAttribute('checked', 'checked');
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

    initMapAPI();

    /*



window.addEventListener("DOMContentLoaded",initMapAPI,false); 

    container.innerHTML += `
    <script>
      function myMap() {
      let mapProp= {
        center:new google.maps.LatLng(33.510320,-112.072510),
        zoom:15,
      };
      let map = new google.maps.Map(document.getElementById("maps"),mapProp);
      }
      </script>
      
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBavBShtE72hTCwaGl7cS0OAujIrigxO3I&callback=myMap"></script>
      `;
*/
  }

  return {render};

})();

export {renderContact};