import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('mapDiv') mapContainer: any;
  startTime = '2021-05-02';
  endTime = '2021-05-03';
  
  private map: any;

  constructor() {

  }


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // Initialize the map here after the DOM is ready
    this.map = L.map(this.mapContainer.nativeElement).setView([48, 2], 1);
    
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

  }

  public fetchEarthquakeData() {

    fetch(`http://localhost:8080/api/v1/earthquake/all?starttime=${this.startTime}&endtime=${this.endTime}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.features) {
          data.features.forEach((feature: any) => {
            if (feature.geometry && feature.geometry.coordinates) {
              const coordinates = feature.geometry.coordinates;

              // You can customize the popup content here
              const magnitude = feature.properties.mag;
              const markerHtmlStyles = `
  background-color: ${this.getMarkerColor(magnitude)};
  width: 1rem;
  height: 1rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF;
`;
              const icon = L.divIcon({
                className: "my-custom-pin",
                iconAnchor: [0, 24],
                popupAnchor: [0, -36],
                html: `<span style="${markerHtmlStyles}" />`
              })
              const marker = L.marker([coordinates[1], coordinates[0]], { icon: icon }).addTo(this.map);

              const popupContent = `
                      <h3>${feature.properties.title}</h3>
                      <p>Magnitute : ${feature.properties.mag}</p>
                      <a href="${feature.properties.url}" target="_blank">More details on the event</a>

                  `;

              marker.bindPopup(popupContent);
            }
          });
        }
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  private getMarkerColor(magnitude: number) {
    // Define color thresholds and corresponding colors
    const thresholds = [2, 3, 4];
    const colors = ['#00ff00', '#ffff00', '#ff9900', '#ff0000']; // Green, Yellow, Orange, Red

    // Determine the color based on the magnitude
    for (let i = 0; i < thresholds.length; i++) {
      if (magnitude < thresholds[i]) {
        return colors[i];
      }
    }
    // Default to the last color (e.g., for magnitudes greater than the highest threshold)
    return colors[colors.length - 1];
  }

}