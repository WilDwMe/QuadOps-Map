import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

export const WifiDataOverlay = ({ data, name, icon }) => {

  const active = useSelector((state) => state.map.clusters);
  
// it's should be refactored below asap...
  
  return (

    active ? (
    <LayersControl.Overlay checked name={name}>
      <LayerGroup>
         <MarkerClusterGroup
          showCoverageOnHover={false}
          removeOutsideVisibleBounds
          disableClusteringAtZoom={16}
          animate
          animateAddingMarkers
          spiderfyOnMaxZoom={false}>
          { data.map((item) => {
            const [lat, lon] = item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
            return (
              <Marker key={uniqid()} icon={icon} position={[lon, lat]}>
                <Popup position={[lon, lat]}>
                <div style={{ lineHeight: 1.5 }}>
                    {'Router: ' + item.properties.router}
                    <br />
                    {'mob:' + item.properties.mob}
                    <br />
                    {'Home SSID: ' + item.properties.Entrance}
                    <br />
                    <span>{item.properties.time}</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MarkerClusterGroup>
      </LayerGroup>
      </LayersControl.Overlay>
    ) : (
      <LayersControl.Overlay checked name={name}>
      <LayerGroup>
          { data.map((item) => {
            const [lat, lon] = item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
            return (
              <Marker key={uniqid()} icon={icon} position={[lon, lat]}>
                 <Popup position={[lon, lat]}>
                 <div style={{ lineHeight: 1.5 }}>
                    {'Router: ' + item.properties.router}
                    <br />
                    {'mob:' + item.properties.mob}
                    <br />
                    {'Home SSID: ' + item.properties.Entrance}
                    <br />
                    <span>{item.properties.time}</span>
                  </div>
                </Popup>
              </Marker>
            );
          })}
      </LayerGroup>
      </LayersControl.Overlay>
    )
    );
};
