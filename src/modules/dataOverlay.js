import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { useSelector } from 'react-redux';
import uniqid from 'uniqid';

export const DataOverlay = ({ data, name, icon }) => {

  const active = useSelector((state) => state.map.clusters);

// it's should be refactored below asap... Cluster component.
  
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
          { data.features.map((item) => {
            const [lat, lon] = item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
            return (
              <Marker key={uniqid()} icon={icon} position={[lon, lat]}>
                <Popup position={[lon, lat]}>
                  <div style={{ lineHeight: 1.5 }}>
                    <h5 className="popup-title">{item.properties.time}</h5>
                    {'Адрес: ' + item.properties.Address}
                    <hr />
                    {'Всего квартир:' + item.properties.Flats}
                    <br />
                    {'Подъезд №:' + item.properties.Entrance}
                    <br />
                    {'UNOM: ' + item.properties.UNOM}
                    <br />
                    {'ID:' + item.properties.ID}
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
          { data.features.map((item) => {
            const [lat, lon] = item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
            return (
              <Marker key={uniqid()} icon={icon} position={[lon, lat]}>
                <Popup position={[lon, lat]}>
                  <div style={{ lineHeight: 1.5 }}>
                    <h5 className="popup-title">{item.properties.time}</h5>
                    {'Адрес: ' + item.properties.Address}
                    <hr />
                    {'Всего квартир:' + item.properties.Flats}
                    <br />
                    {'Подъезд №:' + item.properties.Entrance}
                    <br />
                    {'UNOM: ' + item.properties.UNOM}
                    <br />
                    {'ID:' + item.properties.ID}
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
