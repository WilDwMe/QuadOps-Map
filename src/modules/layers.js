import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import uniqid from 'uniqid';

import mapDataSmall from '../data/rodents.json';

import mapDataEntrances from '../data/entrance_basm.json';
import entranceBasmSt from '../data/entranceBasmSt.json';
import entranceBasmSt4 from '../data/entranceBasmSt4.json';

import entranceBasmBt5 from '../data/entranceBasmBt5.json';
import entranceBasmBt3 from '../data/entranceBasmBt3.json';
import entranceBasmBt2 from '../data/entranceBasmBt2.json';
import entranceBasmBt1 from '../data/entranceBasmBt1.json';
import entranceBasmBt0 from '../data/entranceBasmBt0.json';


import MarkerClusterGroup from 'react-leaflet-markercluster';

const Layers = () => {

  const orangeIcon = L.icon({
    iconUrl: require('../images/newOrange.png'),
    iconSize: [15, 15],
    iconAnchor: [1, 3],
  });

  const blueIcon = L.icon({
    iconUrl: require('../images/newBlue.png'),
    iconSize: [15, 15],
    iconAnchor: [1, 3],
  });

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Данные по сокольникам">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {mapDataSmall.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Подъезды">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {mapDataEntrances.features.map((item) => {
              const [lat, lon] = item.geometry.coordinates;
              return (
                
                <Marker key={uniqid()} position={[lon, lat]} icon={orangeIcon}>
                  <Popup position={[lon, lat]}>
                    <div style={{ lineHeight: 1 }}>
                      <h3>{item.properties.time}</h3>
                      <p>
                        {'Адрес: ' + item.properties.Address}
                        <br />
                        {'Всего квартир: ' + item.properties.Flats}
                        <br />
                        {'UNOM: ' + item.properties.UNOM}
                      </p>
                    </div>
                  </Popup>
                  </Marker>
                 
              );
            })}
               </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Ст 1">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmSt.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Ст 4">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmSt4.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Бт 5">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmBt5.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Бт 3">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmBt3.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Бт 2">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmBt2.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Бт 1">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmBt1.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked name="Данные БСМ Бт 0">
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {entranceBasmBt0.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
          </LayerGroup>
        </LayersControl.Overlay>

      </LayersControl>
    </>
  );
};

export default Layers;
