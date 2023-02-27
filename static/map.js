
/*


let searchradius = '1500';

*/  


// Initialize and add the map
let map, pos;

// Initialize and add the map

function initMap(pos) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // The map, centered at User
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: pos,
  });
  // The marker, positioned at User
  const marker = new google.maps.Marker({
    position: pos,
    map: map,
  });
    }
    );
  };

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}  
window.initMap = initMap();
