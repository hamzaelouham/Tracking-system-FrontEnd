import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
  useMap,
} from "react-leaflet";
import { carIcon } from "./icon";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useGloble } from "../context/";
import { FC } from "react";

const DEFAULT_ZOOM = 10;
const MapView = ({ position }: any) => {
  const map = useMap();
  map.setView(position, map.getZoom());

  return null;
};

const Map: FC = () => {
  // @ts-ignore
  const { position } = useGloble();

  return (
    <MapContainer
      center={position}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <CircleMarker
        center={position}
        pathOptions={{ color: "#0E5DE2" }}
        radius={35}
      >
        <Marker position={position} icon={carIcon}>
          <Popup>
            <div className="flex items-center">
              <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm"> Online</p>
            </div>
          </Popup>
        </Marker>
      </CircleMarker>
      <MapView position={position} />
    </MapContainer>
  );
};

export default Map;
