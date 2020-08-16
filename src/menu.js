import {renderHeader} from './header';
import {renderFooter} from './footer';
import {renderHome} from './home';
import {renderContact} from './contact';

const renderMenu = (() => {

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

    // main div and first tab (home tab), home content loaded on click event
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
    tabTwo.setAttribute('checked', 'checked');
    tabs.appendChild(tabTwo);
    const labelTwo = document.createElement('label');
    labelTwo.setAttribute('for', 'tabtwo');
    labelTwo.textContent = 'Menu';
    tabs.appendChild(labelTwo);

    // menu tab content
    const menuContent = document.createElement('div');
    menuContent.classList.add('tab');
    const menuHeader = document.createElement('h1');
    menuHeader.textContent = 'Pizza';
    menuContent.appendChild(menuHeader);
    const menuGrid = document.createElement('div');
    menuGrid.setAttribute('id', 'menu-grid');
    /*  first menu item - four seasons pizza  */
    const item1 = document.createElement('div');
    item1.classList.add('item');
    const img1 = document.createElement('img');
    img1.classList.add('item-img');
    img1.setAttribute('src', 'images/pizza-img-1.jpeg');
    img1.setAttribute('alt', 'Four Seasons Pizza Image');
    item1.appendChild(img1);
    menuGrid.appendChild(item1);
    /*  second menu item - spicy chicken pizza  */
    const item2 = document.createElement('div');
    item2.classList.add('item');
    const img2 = document.createElement('img');
    img2.classList.add('item-img');
    img2.setAttribute('src', 'images/pizza-img-2.jpeg');
    img2.setAttribute('alt', 'Spicy Chicken Pizza Image');
    item2.appendChild(img2);
    menuGrid.appendChild(item2);
    /*  third menu item - veggie pizza  */
    const item3 = document.createElement('div');
    item3.classList.add('item');
    const img3 = document.createElement('img');
    img3.classList.add('item-img');
    img3.setAttribute('src', 'images/pizza-img-3.jpeg');
    img3.setAttribute('alt', 'Veggie Pizza Image');
    item3.appendChild(img3);
    menuGrid.appendChild(item3);
    /*  fourth menu item - margherita pizza  */
    const item4 = document.createElement('div');
    item4.classList.add('item');
    const img4 = document.createElement('img');
    img4.classList.add('item-img');
    img4.setAttribute('src', 'images/pizza-img-4.jpeg');
    img4.setAttribute('alt', 'Margherita Pizza Image');
    item4.appendChild(img4);
    menuGrid.appendChild(item4);
    /*  fifth menu item - farm fresh pizza  */
    const item5 = document.createElement('div');
    item5.classList.add('item');
    const img5 = document.createElement('img');
    img5.classList.add('item-img');
    img5.setAttribute('src', 'images/pizza-img-5.jpeg');
    img5.setAttribute('alt', 'Farm Fresh Pizza Image');
    item5.appendChild(img5);
    menuGrid.appendChild(item5);
    /*  sixth menu item - loaded meat pizza  */
    const item6 = document.createElement('div');
    item6.classList.add('item');
    const img6 = document.createElement('img');
    img6.classList.add('item-img');
    img6.setAttribute('src', 'images/pizza-img-6.jpeg');
    img6.setAttribute('alt', 'Loaded Meat Pizza Image');
    item6.appendChild(img6);
    menuGrid.appendChild(item6);

    menuContent.appendChild(menuGrid);
    tabs.appendChild(menuContent);

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

    //render footer
    const footer = renderFooter.render();
    container.appendChild(footer);

  }

  return {render};

})();


export {renderMenu};