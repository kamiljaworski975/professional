function initMap() {
  const myLatLng = { lat: 53.87465883883616, lng: -1.7260693950134158 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Professional Construction",
  });
}

initMap();
