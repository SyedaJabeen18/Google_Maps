import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import GoogleMapReact from "google-map-react";

const center = {
  lat: 32.7767,
  lng: -96.797
};

// Try adding or markers and see what happens to the map bounds/zoom
const markers = [
  { lat: 32.872036, lng: -96.771373 },
  { lat: 32.80688, lng: -96.845871 },
  { lat: 32.788971, lng: -96.606299 },
  { lat: 32.84, lng: -97 }
];

function Marker() {
  return <div className="marker" />;
}

function App() {
  const bounds = new window.google.maps.LatLngBounds();

  return (
    <div className="App">
      <section className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={
            {
              // YOUR API KEY HERE
            }
          }
          defaultCenter={center}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => map.fitBounds(bounds)}
        >
          {markers.map((marker, ind) => {
            const location = new window.google.maps.LatLng(
              marker.lat,
              marker.lng
            );
            bounds.extend(location);

            return <Marker key={ind} lat={marker.lat} lng={marker.lng} />;
          })}
        </GoogleMapReact>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
