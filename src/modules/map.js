import React, { useEffect } from 'react';
import { MapContainer, ZoomControl, TileLayer, LayersControl } from 'react-leaflet';
import { fetchWifiPoints } from '../Slices/wifiSlice';
import ToggleButton from '../Components/ToggleButton';
import { useDispatch } from 'react-redux';

import Layers from './layers';

const Map = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWifiPoints());
},[dispatch]);

  return (
    <MapContainer
      center={[55.78996, 37.67941]}
      zoom={15}
      zoomControl={true}
      maxZoom={18}
      className="mapStyle">
      {/* <ZoomControl position="topright" /> */}
      <div className='switch'>
      <ToggleButton/>
      </div>
      <LayersControl position="topright" collapsed={false}>
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topo Map">
          <TileLayer url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Светлая">
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Тёмная">
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png?api_key=18047a24-5edc-4940-a87a-210aef0bee22" />
        </LayersControl.BaseLayer>
      </LayersControl>
      <Layers/>
    </MapContainer>
  );
};

export default Map;
