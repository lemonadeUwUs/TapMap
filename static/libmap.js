// locate nearby libraries
var axios = require('axios');
let key = 'AIzaSyCV8Z7F1MDhyydJurSxYMYLKWFc_3PGirw'
let userlat = '-33.8670522'
let userlong = '151.1957362'
let searchradius = '1500'
var config = {
  method: 'get',
  url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userlat}%2C${userlong}&radius=${searchradius}&type=library&key=${key}`,
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

var map;
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;