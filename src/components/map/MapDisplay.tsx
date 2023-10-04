import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../../contexts/CitiesContext";
import { useUlrPosition } from "../../hooks/useUrlPosition";

export default function MapDisplay() {
  const [mapPosition,setMapPosition] = useState<LatLngExpression>([51.505, -0.09]);

  

  const {cities} = useCities();
    const [mapLat, mapLng] = useUlrPosition();

    useEffect(() => {
      if(mapLat && mapLng){
        setMapPosition([Number(mapLat), Number(mapLng)])
      }
    },[mapLat, mapLng])
    // if(mapLat && mapLng){
    //   setMapPosition([Number(mapLat), Number(mapLng)])
    // }
  return (
    <div className="w-full h-full ">
        <MapContainer center={mapPosition} zoom={6} scrollWheelZoom={true} className="h-full">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {
        cities.map((city)=>(
          <Marker position={[city.position.lat,city.position.lng]} key={city.id} >
          <Popup>
            <span>{city.emoji}</span> <span>{city.name}</span>
          </Popup>
        </Marker>
        ))
    }
    <ChangeMapCenter position={[Number(mapLat),Number(mapLng)]} />
    <DetectClick />
  </MapContainer>
    </div>
  )
}
function ChangeMapCenter({position}:{position: [number, number]}){
  const map = useMap();
  map.setView(position, 6);
  return null;
}

function DetectClick(){
  const navigate = useNavigate();
  useMapEvents({
    click: (e)=>navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
  })
  return null;
}