import React from 'react';
import { LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import uniqid from 'uniqid';

import mapDataSmall from '../data/rodents.json';
import mapDataEntrances from '../data/entrance_basm.json';

const Layers = () => {
  const orangeIcon = L.icon({
    iconUrl: require('../images/orange.png'),
    iconSize: [18, 18],
    iconAnchor: [12, 40],
  });

  const blueIcon = L.icon({
    iconUrl: require('../images/blue.png'),
    iconSize: [18, 18],
    iconAnchor: [12, 40],
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
            {mapDataSmall.features.map((item) => {
              const [lat, lon] =
                item.geometry.type === 'Point' ? item.geometry.coordinates : [0, 0];
              return <Marker key={uniqid()} icon={blueIcon} position={[lon, lat]}></Marker>;
            })}
          </LayerGroup>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Подъезды">
          <LayerGroup>
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
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </>
  );
};

export default Layers;
