import { User } from './User';
import { Company } from './company';
import { CustomMap } from "./CustomMap";

// Create instances of User and Company
const user = new User();
console.log(user);

const company = new Company();
console.log(company);

// Initialize the map
new CustomMap('map');
const customMap = new CustomMap('map');

// customMap.googleMap
customMap.addMarker(user);
customMap.addMarker(company);

// Define the map options
const mapOptions: google.maps.MapOptions = {
    center: { lat: 30, lng: -110 }, // Set the center of the map
    zoom: 8, // Set the initial zoom level
    mapTypeId: google.maps.MapTypeId.ROADMAP, // Set the map type
};

// Initialize the map
function initMap(): void {
    customMap.initialize(mapOptions);
}

// Call the initMap function when the window loads
window.onload = initMap;