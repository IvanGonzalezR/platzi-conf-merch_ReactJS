import React from 'react'
import '../styles/components/Map.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const MAPSAPIKEY = "AIzaSyDEAT52oSUDjufgGAIchIETg1NNqahK-U4";

const Map = ({ data }) => {
  const [ lat, setLat ] = React.useState(50);
  const [ lon, setLon ] = React.useState(-6);

  React.useEffect(() => {
    setLat(data.latitude);
    setLon(data.longitude);
  }, []);

  console.log(lat, lon);
  return (
    <>
      <div className='leaflet-container'>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />

        <MapContainer center={[ 40, 40 ]} zoom={16} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[ 40, 40 ]}>
            <i className="fa-solid fa-location-dot"></i>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}



export { Map };
