import {renderHome} from './home';

// callback for maps api
window.myMap = function() {
  console.log('myMap called');
  let mapProp= {
    center:new google.maps.LatLng(36.146740,-94.143410),
    zoom:13,
  };
  let map = new google.maps.Map(document.getElementById("maps"),mapProp);
};

// make api call
window.initMapAPI = function() {

  // delete api call script if already exists
  if (document.body.lastElementChild instanceof HTMLScriptElement) {
    window.google = undefined;
    document.body.lastElementChild.remove();
  };

  // create or recreate script
  let element = document.createElement("script");
  element.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBavBShtE72hTCwaGl7cS0OAujIrigxO3I&callback=myMap";
  document.body.appendChild(element);
}

window.onload = renderHome.render();
