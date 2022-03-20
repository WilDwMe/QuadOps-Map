import React from 'react';
import { LayersControl } from 'react-leaflet';
import { blueIcon } from './icons';
import { WifiDataOverlay } from './wifiDataOverlay';
// import mapDataSmall from '../data/rodents.json';
// import mapDataEntrances from '../data/entrance_basm.json';

const WifiLayers = ({ points, loaded }) => {

  return (
    <>
      <LayersControl position="topright">
        {/* <DataOverlay data={mapDataSmall} icon={orangeIcon} name={'Сокольники'} /> */}
        {/* <DataOverlay data={mapDataEntrances} icon={orangeIcon} name={'Басманный'} /> */}
        <WifiDataOverlay data={points} icon={blueIcon} name={'Wifi точки'} />

      </LayersControl>
    </>
  )
};

export default WifiLayers;
