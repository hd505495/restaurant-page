/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: renderContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderContact\", function() { return renderContact; });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nconst renderContact = (() => {\n\n  const container = document.getElementById('content');\n\n  const _clearPage = () => {\n    let child = container.lastChild;\n    while(child) {\n      container.removeChild(child);\n      child = container.lastChild;\n    }\n  } \n\n  const render = () => {\n    _clearPage();\n\n    // render header\n    const header = _header__WEBPACK_IMPORTED_MODULE_0__[\"renderHeader\"].render();\n    container.appendChild(header);\n\n    // render body\n\n    // main div and first tab (home tab)\n    const main = document.createElement('section');\n    main.classList.add('main');\n    const tabs = document.createElement('div');\n    tabs.classList.add('tabs');\n    const tabOne = document.createElement('input');\n    tabOne.setAttribute('type', 'radio');\n    tabOne.setAttribute('name', 'tabs');\n    tabOne.setAttribute('id', 'tabone');\n    tabOne.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__[\"renderHome\"].render);\n    tabs.appendChild(tabOne);\n    const labelOne = document.createElement('label');\n    labelOne.setAttribute('for', 'tabone');\n    labelOne.textContent = 'Home';\n    tabs.appendChild(labelOne);\n\n    // second tab (menu tab), menu content loaded on click event\n    const tabTwo = document.createElement('input');\n    tabTwo.setAttribute('type', 'radio');\n    tabTwo.setAttribute('name', 'tabs');\n    tabTwo.setAttribute('id', 'tabtwo');\n    tabTwo.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_3__[\"renderMenu\"].render);\n    tabs.appendChild(tabTwo);\n    const labelTwo = document.createElement('label');\n    labelTwo.setAttribute('for', 'tabtwo');\n    labelTwo.textContent = 'Menu';\n    tabs.appendChild(labelTwo);\n\n    // third tab (contact tab)\n    const tabThree = document.createElement('input');\n    tabThree.setAttribute('type', 'radio');\n    tabThree.setAttribute('name', 'tabs');\n    tabThree.setAttribute('id', 'tabthree');\n    tabThree.setAttribute('checked', 'checked');\n    tabs.appendChild(tabThree);\n    const labelThree = document.createElement('label');\n    labelThree.setAttribute('for', 'tabthree');\n    labelThree.textContent = 'Contact';\n    tabs.appendChild(labelThree);\n\n    // contact tab contents\n    const contact = document.createElement('div');\n    contact.classList.add('tab');\n    const contactHeader = document.createElement('h1');\n    contactHeader.textContent = 'Contact & Location';\n    contact.appendChild(contactHeader);\n    const contactContent = document.createElement('div');\n    contactContent.setAttribute('id', 'contactContent');\n    const contactInfo = document.createElement('div');\n    contactInfo.setAttribute('id', 'contact');\n\n    const phone = document.createElement('div');\n    phone.setAttribute('id', 'phone');\n    const phoneTitle = document.createElement('h2');\n    phoneTitle.textContent = 'Phone';\n    phone.appendChild(phoneTitle);\n    const number = document.createElement('p');\n    number.textContent = '(012) 345-6789';\n    phone.appendChild(number);\n    contactInfo.appendChild(phone);\n\n    const email = document.createElement('div');\n    email.setAttribute('id', 'email');\n    const emailTitle = document.createElement('h2');\n    emailTitle.textContent = 'Email';\n    email.appendChild(emailTitle);\n    const emailAddress = document.createElement('p');\n    emailAddress.textContent = 'mariospizzeria@hotmail.com';\n    email.appendChild(emailAddress);\n    contactInfo.appendChild(email);\n\n    const hours = document.createElement('div');\n    hours.setAttribute('id', 'hours');\n    const hoursTitle = document.createElement('h2');\n    hoursTitle.textContent = 'Business Hours';\n    hours.appendChild(hoursTitle);\n    const dayTimes = document.createElement('div');\n    dayTimes.setAttribute('id', 'dayTimes');\n    const monday = document.createElement('p');\n    monday.textContent = 'Monday 10:00am - 9:00pm';\n    dayTimes.appendChild(monday);\n    const tuesday = document.createElement('p');\n    tuesday.textContent = 'Tuesday 10:00am - 9:00pm';\n    dayTimes.appendChild(tuesday);\n    const wednesday = document.createElement('p');\n    wednesday.textContent = 'Wednesday 10:00am - 9:00pm';\n    dayTimes.appendChild(wednesday);\n    const thursday = document.createElement('p');\n    thursday.textContent = 'Thursday 10:00am - 9:00pm';\n    dayTimes.appendChild(thursday);\n    const friday = document.createElement('p');\n    friday.textContent = 'Friday 10:00am - 11:00pm';\n    dayTimes.appendChild(friday);\n    const saturday = document.createElement('p');\n    saturday.textContent = 'Saturday 10:00am - 11:00pm';\n    dayTimes.appendChild(saturday);\n    const sunday = document.createElement('p');\n    sunday.textContent = 'Sunday 12:00pm - 8:00pm';\n    dayTimes.appendChild(sunday);\n    hours.appendChild(dayTimes);\n    contactInfo.appendChild(hours);\n    contactContent.appendChild(contactInfo);\n\n    const maps = document.createElement('div');\n    maps.setAttribute('id', 'maps');\n    maps.setAttribute('style', 'width:350px;height:350px;');\n    contactContent.appendChild(maps);\n    contact.appendChild(contactContent);\n\n    tabs.appendChild(contact);\n    main.appendChild(tabs);\n    container.appendChild(main);\n\n    //render footer\n    const footer = _footer__WEBPACK_IMPORTED_MODULE_1__[\"renderFooter\"].render();\n    container.appendChild(footer);\n\n    initMapAPI();\n  }\n\n  return {render};\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: renderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderFooter\", function() { return renderFooter; });\nconst renderFooter = (() => {\n\n  const render = () => {\n\n    const footer = document.createElement('footer');\n\n    let date = new Date().getFullYear();\n\n    const footerContent = document.createElement('div');\n    footer.appendChild(footerContent);\n    footerContent.innerHTML += 'Copyright &copy; &nbsp;';\n    footerContent.innerHTML += date;\n    footerContent.innerHTML += `&nbsp; | &nbsp; Created by Hawk Dykes &nbsp; | &nbsp;`;\n    const a = document.createElement('a');\n    a.setAttribute('href', 'https://github.com/hd505495');\n    a.setAttribute('target', '_blank');\n    a.classList.add('github-link');\n    const githubIcon = document.createElement('i');\n    githubIcon.classList.add('fab');\n    githubIcon.classList.add('fa-github');\n    a.appendChild(githubIcon);\n    a.innerHTML += ' hd505495 ';\n    footerContent.appendChild(a);\n\n    return footer;\n  }\n\n  return {render};\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: renderHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHeader\", function() { return renderHeader; });\nconst renderHeader = (() => {\n\n  const render = () => {\n\n    const header = document.createElement('header');\n    const headerContents = document.createElement('div');\n    headerContents.setAttribute('id', 'header-info');\n    header.appendChild(headerContents);\n    const address = document.createElement('address');\n\n    const addressP1 = document.createElement('p');\n    addressP1.setAttribute('id', 'name');\n    addressP1.textContent = `Mario's Pizzeria`;\n    const addressP2 = document.createElement('p');\n    addressP2.classList.add('bar');\n    addressP2.textContent = '|';\n    const addressP3 = document.createElement('p');\n    addressP3.textContent = '456 Pedro de Medici Blvd';\n    const addressP4 = document.createElement('p');\n    addressP4.classList.add('bar');\n    addressP4.textContent = '|';\n    const addressP5 = document.createElement('p');\n    addressP5.textContent = '(012) 345-6789';\n\n    address.appendChild(addressP1);\n    address.appendChild(addressP2);\n    address.appendChild(addressP3);\n    address.appendChild(addressP4);\n    address.appendChild(addressP5);\n    headerContents.appendChild(address);\n\n    const contactIcons = document.createElement('div');\n    contactIcons.setAttribute('id', 'contact-icons');\n    const contactLinks = document.createElement('div');\n    contactLinks.classList.add('contact-links');\n\n    const a1 = document.createElement('a');\n    a1.setAttribute('id', 'fb-link');\n    a1.setAttribute('href', '');\n    a1.classList.add('btn');\n    a1.classList.add('contact-icon');\n    const fbLink = document.createElement('i');\n    fbLink.classList.add('fab');\n    fbLink.classList.add('fa-facebook-square');\n    a1.appendChild(fbLink);\n    contactLinks.appendChild(a1);\n\n    const a2 = document.createElement('a');\n    a2.setAttribute('id', 'insta-link');\n    a2.setAttribute('href', '');\n    a2.classList.add('btn');\n    a2.classList.add('contact-icon');\n    const instaLink = document.createElement('i');\n    instaLink.classList.add('fab');\n    instaLink.classList.add('fa-instagram');\n    a2.appendChild(instaLink);\n    contactLinks.appendChild(a2);\n\n    const a3 = document.createElement('a');\n    a3.setAttribute('id', 'email-link');\n    a3.setAttribute('href', '');\n    a3.classList.add('btn');\n    a3.classList.add('contact-icon');\n    const emailLink = document.createElement('i');\n    emailLink.classList.add('fas');\n    emailLink.classList.add('fa-envelope');\n    a3.appendChild(emailLink);\n    contactLinks.appendChild(a3);\n\n    contactIcons.appendChild(contactLinks);\n    header.appendChild(contactIcons);\n\n    return header;\n  }\n\n  return {render};\n\n})();\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: renderHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHome\", function() { return renderHome; });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _typeWriter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeWriter */ \"./src/typeWriter.js\");\n\n\n\n\n\n\n\nconst renderHome = (() => {\n\n  const container = document.getElementById('content');\n\n  const _clearPage = () => {\n    let child = container.lastChild;\n    while(child) {\n      container.removeChild(child);\n      child = container.lastChild;\n    }\n  }\n\n  const render = () => {\n    _clearPage();\n\n    // render header\n    const header = _header__WEBPACK_IMPORTED_MODULE_0__[\"renderHeader\"].render();\n    container.appendChild(header);\n\n    // render body\n\n    // main div and first tab (home tab)\n    const main = document.createElement('section');\n    main.classList.add('main');\n    const tabs = document.createElement('div');\n    tabs.classList.add('tabs');\n    const tabOne = document.createElement('input');\n    tabOne.setAttribute('type', 'radio');\n    tabOne.setAttribute('name', 'tabs');\n    tabOne.setAttribute('id', 'tabone');\n    tabOne.setAttribute('checked', 'checked');\n    tabs.appendChild(tabOne);\n    const labelOne = document.createElement('label');\n    labelOne.setAttribute('for', 'tabone');\n    labelOne.textContent = 'Home';\n    tabs.appendChild(labelOne);\n\n    // home tab content\n    const homeContent = document.createElement('div');\n    homeContent.classList.add('tab');\n    homeContent.setAttribute('id', 'homeTab');\n    const contentText = document.createElement('h1');\n    contentText.setAttribute('id', 'homeHeader');\n    contentText.textContent = 'Serving Your ';\n    const typingText = document.createElement('div');\n    typingText.classList.add('text-primary');\n    typingText.classList.add('txt-type');\n    typingText.dataset.wait = 3000;\n    typingText.dataset.words = '[\"Cravings\", \"Favorites\", \"Family\", \"Friends\", \"Hunger\"]';\n\n    contentText.appendChild(typingText);\n    homeContent.appendChild(contentText);\n    tabs.appendChild(homeContent);\n\n    // second tab (menu tab), menu content loaded on click event\n    const tabTwo = document.createElement('input');\n    tabTwo.setAttribute('type', 'radio');\n    tabTwo.setAttribute('name', 'tabs');\n    tabTwo.setAttribute('id', 'tabtwo');\n    tabTwo.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__[\"renderMenu\"].render);\n    tabs.appendChild(tabTwo);\n    const labelTwo = document.createElement('label');\n    labelTwo.setAttribute('for', 'tabtwo');\n    labelTwo.textContent = 'Menu';\n    tabs.appendChild(labelTwo);\n\n    // third tab (contact tab), contact content loaded on click event\n    const tabThree = document.createElement('input');\n    tabThree.setAttribute('type', 'radio');\n    tabThree.setAttribute('name', 'tabs');\n    tabThree.setAttribute('id', 'tabthree');\n    tabThree.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__[\"renderContact\"].render);\n    tabs.appendChild(tabThree);\n    const labelThree = document.createElement('label');\n    labelThree.setAttribute('for', 'tabthree');\n    labelThree.textContent = 'Contact';\n    tabs.appendChild(labelThree);\n\n    main.appendChild(tabs);\n    container.appendChild(main);\n    Object(_typeWriter__WEBPACK_IMPORTED_MODULE_4__[\"init\"])();\n\n    //render footer\n    const footer = _footer__WEBPACK_IMPORTED_MODULE_3__[\"renderFooter\"].render();\n    container.appendChild(footer);\n  }\n\n  return {render};\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n// callback for maps api\nwindow.myMap = function() {\n  console.log('myMap called');\n  let mapProp= {\n    center:new google.maps.LatLng(36.146740,-94.143410),\n    zoom:13,\n  };\n  let map = new google.maps.Map(document.getElementById(\"maps\"),mapProp);\n};\n\n// make api call\nwindow.initMapAPI = function() {\n\n  // delete api call script if already exists\n  if (document.body.lastElementChild instanceof HTMLScriptElement) {\n    window.google = undefined;\n    document.body.lastElementChild.remove();\n  };\n\n  // create or recreate script\n  let element = document.createElement(\"script\");\n  element.src = \"https://maps.googleapis.com/maps/api/js?key=AIzaSyBavBShtE72hTCwaGl7cS0OAujIrigxO3I&callback=myMap\";\n  document.body.appendChild(element);\n}\n\nwindow.onload = _home__WEBPACK_IMPORTED_MODULE_0__[\"renderHome\"].render();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: renderMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenu\", function() { return renderMenu; });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst renderMenu = (() => {\n\n  const container = document.getElementById('content');\n\n  const _clearPage = () => {\n    let child = container.lastChild;\n    while(child) {\n      container.removeChild(child);\n      child = container.lastChild;\n    }\n  }\n\n  const render = () => {\n    _clearPage();\n\n    // render header\n    const header = _header__WEBPACK_IMPORTED_MODULE_0__[\"renderHeader\"].render();\n    container.appendChild(header);\n\n    // render body\n\n    // main div and first tab (home tab), home content loaded on click event\n    const main = document.createElement('section');\n    main.classList.add('main');\n    const tabs = document.createElement('div');\n    tabs.classList.add('tabs');\n    const tabOne = document.createElement('input');\n    tabOne.setAttribute('type', 'radio');\n    tabOne.setAttribute('name', 'tabs');\n    tabOne.setAttribute('id', 'tabone');\n    tabOne.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_2__[\"renderHome\"].render);\n    tabs.appendChild(tabOne);\n    const labelOne = document.createElement('label');\n    labelOne.setAttribute('for', 'tabone');\n    labelOne.textContent = 'Home';\n    tabs.appendChild(labelOne);\n\n    // second tab (menu tab), menu content loaded on click event\n    const tabTwo = document.createElement('input');\n    tabTwo.setAttribute('type', 'radio');\n    tabTwo.setAttribute('name', 'tabs');\n    tabTwo.setAttribute('id', 'tabtwo');\n    tabTwo.setAttribute('checked', 'checked');\n    tabs.appendChild(tabTwo);\n    const labelTwo = document.createElement('label');\n    labelTwo.setAttribute('for', 'tabtwo');\n    labelTwo.textContent = 'Menu';\n    tabs.appendChild(labelTwo);\n\n    // menu tab content\n    const menuContent = document.createElement('div');\n    menuContent.classList.add('tab');\n    const menuHeader = document.createElement('h1');\n    menuHeader.textContent = 'Pizza';\n    menuContent.appendChild(menuHeader);\n    const menuGrid = document.createElement('div');\n    menuGrid.setAttribute('id', 'menu-grid');\n    /*  first menu item - four seasons pizza  */\n    const item1 = document.createElement('div');\n    item1.classList.add('item');\n    const img1 = document.createElement('img');\n    img1.classList.add('item-img');\n    img1.setAttribute('src', 'images/pizza-img-1.jpeg');\n    img1.setAttribute('alt', 'Four Seasons Pizza Image');\n    item1.appendChild(img1);\n    menuGrid.appendChild(item1);\n    /*  second menu item - spicy chicken pizza  */\n    const item2 = document.createElement('div');\n    item2.classList.add('item');\n    const img2 = document.createElement('img');\n    img2.classList.add('item-img');\n    img2.setAttribute('src', 'images/pizza-img-2.jpeg');\n    img2.setAttribute('alt', 'Spicy Chicken Pizza Image');\n    item2.appendChild(img2);\n    menuGrid.appendChild(item2);\n    /*  third menu item - veggie pizza  */\n    const item3 = document.createElement('div');\n    item3.classList.add('item');\n    const img3 = document.createElement('img');\n    img3.classList.add('item-img');\n    img3.setAttribute('src', 'images/pizza-img-3.jpeg');\n    img3.setAttribute('alt', 'Veggie Pizza Image');\n    item3.appendChild(img3);\n    menuGrid.appendChild(item3);\n    /*  fourth menu item - margherita pizza  */\n    const item4 = document.createElement('div');\n    item4.classList.add('item');\n    const img4 = document.createElement('img');\n    img4.classList.add('item-img');\n    img4.setAttribute('src', 'images/pizza-img-4.jpeg');\n    img4.setAttribute('alt', 'Margherita Pizza Image');\n    item4.appendChild(img4);\n    menuGrid.appendChild(item4);\n    /*  fifth menu item - farm fresh pizza  */\n    const item5 = document.createElement('div');\n    item5.classList.add('item');\n    const img5 = document.createElement('img');\n    img5.classList.add('item-img');\n    img5.setAttribute('src', 'images/pizza-img-5.jpeg');\n    img5.setAttribute('alt', 'Farm Fresh Pizza Image');\n    item5.appendChild(img5);\n    menuGrid.appendChild(item5);\n    /*  sixth menu item - loaded meat pizza  */\n    const item6 = document.createElement('div');\n    item6.classList.add('item');\n    const img6 = document.createElement('img');\n    img6.classList.add('item-img');\n    img6.setAttribute('src', 'images/pizza-img-6.jpeg');\n    img6.setAttribute('alt', 'Loaded Meat Pizza Image');\n    item6.appendChild(img6);\n    menuGrid.appendChild(item6);\n\n    menuContent.appendChild(menuGrid);\n    tabs.appendChild(menuContent);\n\n    // third tab (contact tab), contact content loaded on click event\n    const tabThree = document.createElement('input');\n    tabThree.setAttribute('type', 'radio');\n    tabThree.setAttribute('name', 'tabs');\n    tabThree.setAttribute('id', 'tabthree');\n    tabThree.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_3__[\"renderContact\"].render);\n    tabs.appendChild(tabThree);\n    const labelThree = document.createElement('label');\n    labelThree.setAttribute('for', 'tabthree');\n    labelThree.textContent = 'Contact';\n    tabs.appendChild(labelThree);\n\n    main.appendChild(tabs);\n    container.appendChild(main);\n\n    //render footer\n    const footer = _footer__WEBPACK_IMPORTED_MODULE_1__[\"renderFooter\"].render();\n    container.appendChild(footer);\n\n  }\n\n  return {render};\n\n})();\n\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/typeWriter.js":
/*!***************************!*\
  !*** ./src/typeWriter.js ***!
  \***************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\nclass TypeWriter {\n  constructor(txtElement, words, wait = 3000) {\n    this.txtElement = txtElement;\n    this.words = words;\n    this.txt = '';\n    this.wordIndex = 0;\n    this.wait = parseInt(wait, 10);\n    this.type();\n    this.isDeleting = false;\n  }\n\n  type() {\n    // Current index of word\n    const current = this.wordIndex % this.words.length;\n    // Get full text of current word\n    const fullTxt = this.words[current];\n\n    // Check if deleting\n    if(this.isDeleting) {\n      // Remove char\n      this.txt = fullTxt.substring(0, this.txt.length - 1);\n    } else {\n      // Add char\n      this.txt = fullTxt.substring(0, this.txt.length + 1);\n    }\n\n    // Insert txt into element\n    this.txtElement.innerHTML = `<span class=\"txt\">${this.txt}</span>`;\n\n    // Initial Type Speed\n    let typeSpeed = 300;\n\n    if(this.isDeleting) {\n      typeSpeed /= 2;\n    }\n\n    // If word is complete\n    if(!this.isDeleting && this.txt === fullTxt) {\n      // Make pause at end\n      typeSpeed = this.wait;\n      // Set delete to true\n      this.isDeleting = true;\n    } else if(this.isDeleting && this.txt === '') {\n      this.isDeleting = false;\n      // Move to next word\n      this.wordIndex++;\n      // Pause before start typing\n      typeSpeed = 500;\n    }\n\n    setTimeout(() => this.type(), typeSpeed);\n  }\n}\n\nfunction init() {\n  \n  const txtElement = document.querySelector('.txt-type');\n  const words = JSON.parse(txtElement.getAttribute('data-words'));\n  const wait = txtElement.getAttribute('data-wait');\n  \n  new TypeWriter(txtElement, words, wait);\n}\n\n\n\n//# sourceURL=webpack:///./src/typeWriter.js?");

/***/ })

/******/ });