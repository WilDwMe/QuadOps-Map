import React from "react";
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import uniqid from 'uniqid';

export const DataOverlay = ({data, name, icon}) => {

    return (
        <LayersControl.Overlay checked name={name}>
          <LayerGroup>
          <MarkerClusterGroup showCoverageOnHover={false} removeOutsideVisibleBounds disableClusteringAtZoom={18} animate animateAddingMarkers spiderfyOnMaxZoom={false}>
            {data.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={icon} position={[lon, lat]}></Marker>;
            })}
              </MarkerClusterGroup>
            </LayerGroup>
            </LayersControl.Overlay>

    )

};