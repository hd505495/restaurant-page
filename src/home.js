import {renderHeader} from './header';
import {renderMenu} from './menu';
import {renderContact} from './contact';
import {renderFooter} from './footer';
import {init as initTyper} from './typeWriter';


const renderHome = (() => {

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
    tabOne.setAttribute('checked', 'checked');
    tabs.appendChild(tabOne);
    const labelOne = document.createElement('label');
    labelOne.setAttribute('for', 'tabone');
    labelOne.textContent = 'Home';
    tabs.appendChild(labelOne);

    // home tab content
    const homeContent = document.createElement('div');
    homeContent.classList.add('tab');
    homeContent.setAttribute('id', 'homeTab');
    const contentText = document.createElement('h1');
    contentText.setAttribute('id', 'homeHeader');
    contentText.textContent = 'Serving Your ';
    const typingText = document.createElement('div');
    typingText.classList.add('text-primary');
    typingText.classList.add('txt-type');
    typingText.dataset.wait = 3000;
    typingText.dataset.words = '["Cravings", "Favorites", "Family", "Friends", "Hunger"]';

    contentText.appendChild(typingText);
    homeContent.appendChild(contentText);
    tabs.appendChild(homeContent);

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

    // third tab (contact tab), contact content loaded on click event
    const tabThree = document.createElement('input');
    tabThree.setAttribute('type', 'radio');
    tabThree.setAttribute('name', 'tabs');
    tabThree.setAttribute('id', 'tabthree');
    tabThree.addEventListener('click', renderContact.render);
    tabs.appendChild(tabThree);
    const labelThree = document.createElement('label');
    labelThree.setAttribute('for', 'tabthree');
    labelThree.textContent = 'Contact';
    tabs.appendChild(labelThree);

    main.appendChild(tabs);
    container.appendChild(main);
    initTyper();

    //render footer
    const footer = renderFooter.render();
    container.appendChild(footer);
  }

  return {render};

})();


export {renderHome};