export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    const mapElement = document.getElementById(divId) as HTMLElement;
    this.googleMap = new google.maps.Map(mapElement, {
        // center: { lat: 30, lng: -110 }, // Default center
        center: { lat: 0, lng: 0 }, // Default center
        zoom: 1, // Default zoom
    });
  }

  initialize(mapOptions: google.maps.MapOptions): void {
      this.googleMap.setOptions(mapOptions);
  }

  initMap(): void {
    // This method is no longer needed since the map is initialized in the constructor
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      // title: user.name, // Assuming User and Company have a 'name' property
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        // content: `<h1>Hi there!</h1>`,
        content: mappable.markerContent(),
        // content: `<h1>${mappable.name}</h1>`,
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}