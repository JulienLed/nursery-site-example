"use client";

import { TileLayer, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function Map() {
  const position: [number, number] = [50.716252, 4.608382];

  const customIcon = L.icon({
    iconUrl: "/marker.png",
    iconSize: [40, 40],
    popupAnchor: [0, -10],
  });

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      className="rounded-2xl shadow-2xl w-70 h-80 md:w-[40vw] md:h-[50vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>Nous sommes ici !</Popup>
      </Marker>
    </MapContainer>
  );
}
