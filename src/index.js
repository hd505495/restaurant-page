import {renderHome} from './home';

window.myMap = function() {
  console.log('myMap called');
  let mapProp= {
    center:new google.maps.LatLng(36.146740,-94.143410),
    zoom:13,
  };
  let map = new google.maps.Map(document.getElementById("maps"),mapProp);
};


window.initMapAPI = function() {

  if (document.body.lastElementChild instanceof HTMLScriptElement) {
    window.google = undefined;
    document.body.lastElementChild.remove();
  };

  let element = document.createElement("script");
  element.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBavBShtE72hTCwaGl7cS0OAujIrigxO3I&callback=myMap";
  document.body.appendChild(element);
}

window.onload = renderHome.render();
