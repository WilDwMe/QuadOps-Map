import React from 'react'
import { Button } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux';
import { clusters } from '../Slices/mapSlice';

const ToggleButton = () => {

  const active = useSelector((state) => state.map.clusters);
  const dispatch = useDispatch();

  const handleClick = () =>
   dispatch(clusters());
  
    return (
      <Button toggle color='black' active={active} onClick={handleClick}>
        Clusters
      </Button>
    )
  }

export default ToggleButton;