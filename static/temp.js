const fs = require("fs");

function initMap() {
   // Try HTML5 geolocation.
   if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        const jsonContent = JSON.stringify(pos);

       return pos
      }

 )};  
}