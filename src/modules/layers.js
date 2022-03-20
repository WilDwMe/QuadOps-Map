import React from 'react';
import { LayersControl } from 'react-leaflet';
import { blueIcon, orangeTwo, pink, violet, lightBlue, darkBlue, orangeRed} from './icons';
import { DataOverlay } from './dataOverlay';
// import mapDataSmall from '../data/rodents.json';
// import mapDataEntrances from '../data/entrance_basm.json';
import entranceBasmSt from '../data/entranceBasmSt.json';
import entranceBasmSt4 from '../data/entranceBasmSt4.json';
import entranceBasmBt5 from '../data/entranceBasmBt5.json';
import entranceBasmBt3 from '../data/entranceBasmBt3.json';
import entranceBasmBt2 from '../data/entranceBasmBt2.json';
import entranceBasmBt1 from '../data/entranceBasmBt1.json';
import entranceBasmBt0 from '../data/entranceBasmBt0.json';

const Layers = () => {
  return (
    <>
      <LayersControl position="topright">
        {/* <DataOverlay data={mapDataSmall} icon={orangeIcon} name={'Сокольники'} /> */}
        {/* <DataOverlay data={mapDataEntrances} icon={orangeIcon} name={'Басманный'} /> */}
        <DataOverlay data={entranceBasmSt} icon={blueIcon} name={'Данные БСМ Ст 1'} />
        <DataOverlay data={entranceBasmSt4} icon={orangeTwo} name={'Данные БСМ Ст 4'} />
        <DataOverlay data={entranceBasmBt5} icon={pink} name={'Данные БСМ Ст 5'} />
        <DataOverlay data={entranceBasmBt3} icon={violet} name={'Данные БСМ Ст 3'} />
        <DataOverlay data={entranceBasmBt2} icon={lightBlue} name={'Данные БСМ Ст 2'} />
        <DataOverlay data={entranceBasmBt1} icon={darkBlue} name={'Данные БСМ Ст 1'} />
        <DataOverlay data={entranceBasmBt0} icon={orangeRed} name={'Данные БСМ Ст 0'} />
      </LayersControl>
    </>
  );
};

export default Layers;
