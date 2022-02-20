import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import uniqid from 'uniqid';

import mapDataSmall from '../data/rodents.json';
import mapDataEntrances from '../data/entrance_basm.json';
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


  // useEffect(()=> {
  //   console.log(map);
  // })

  // Use the map methods:
  // const mapEvents = useMapEvents({
  //     zoomend: () => {
  //       console.log("Zoom Level:", mapEvents.getZoom());
  //     },
  //     moveend: () => {
  //         console.log(mapEvents.getBounds())
  //     }
  // })

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Данные по сокольникам">
          <LayerGroup>
          <MarkerClusterGroup>
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
          <MarkerClusterGroup>
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
      </LayersControl>
    </>
  );
};

export default Layers;
