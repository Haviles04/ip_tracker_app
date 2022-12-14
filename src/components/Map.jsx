import React from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import Updatemap from "./Updatemap";

const Maps = ({ info }) => {
  

  return (
    <div className=" w-full h-full mt-[-160px] md:mt-[-80px] z-0">
      <MapContainer
        style={{ height: "1000px" }}
        center={
          info ? [info.location.lat, info.location.lng] : [40.71427, -74.00597]
        }
        zoom={15}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={
            info
              ? [info.location.lat, info.location.lng]
              : [40.71427, -74.00597]
          }
        ></Marker>
        <Updatemap info={info} />
      </MapContainer>
    </div>
  );
};

export default Maps;
