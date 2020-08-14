import {renderHome} from './home';

window.onload = renderHome.render();

/*
function myMap() {
  let mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  let map = new google.maps.Map(document.getElementById("maps"),mapProp);
}

function initMapAPI(){
  var element = document.createElement("script");
  element.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBavBShtE72hTCwaGl7cS0OAujIrigxO3I&callback=myMap";
  document.body.appendChild(element);
} 

window.addEventListener("DOMContentLoaded",initMapAPI,false); */