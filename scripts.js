//alert("pai ta on")
window.onscroll = function() {scroller()};
  function scroller() {
	  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		  document.getElementById("main-nav").classList.add("choco-nav");
	  } else {
		  document.getElementById("main-nav").classList.remove("choco-nav");
	  }
 }
/* 
 mapboxgl.accessToken = 'pk.eyJ1IjoibW9pc2VzYW50dW5lcyIsImEiOiJja29hanZoN3AwZG52Mm5tbnY4cnNwN3F5In0.yffdNSg6WYHruwuU7p1WHw';
 var map = new mapboxgl.Map({
	 container: 'map', // container id
	 style: 'mapbox://styles/mapbox/streets-v11', // style URL
	 center: [-74.5, 40], // starting position [lng, lat]
	 zoom: 9 // starting zoom
 });

*/
function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBqJkLeZziTRmkRXq0FwKw3g1Nzg1nGR2w";

  document.getElementById("mapa2").innerHTML = "<img src='"+img_url+"'>";
}