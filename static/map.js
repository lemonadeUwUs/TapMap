// locate nearby libraries

let key = 'AIzaSyCV8Z7F1MDhyydJurSxYMYLKWFc_3PGirw';

let searchradius = '1500';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    },
    () => {
      handleLocationError(true);
    }
  );
} else {
  // Browser doesn't support Geolocation
  handleLocationError(false);
}

  


// Initialize and add the map
let map;

// Initialize and add the map
function initMap() {
  // The location of User
  // The map, centered at User
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: {lat: pos.lat,lng: pos.lng},
  });
  // The marker, positioned at User
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
  });
}

window.initMap = initMap;