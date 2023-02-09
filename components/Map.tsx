import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import { carIcon } from "./icon";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const DEFAULT_ZOOM = 10;

const Map = ({ position }: any) => {
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
    </MapContainer>
  );
};

export default Map;
