import React, { useEffect, useState } from 'react';
import styles from './SwipeToConfirmButtom.module.css'
import styled from '@emotion/styled';
import Arrow from '../../public/images/arrow-right-white.png'

import { Box, Slider, Typography } from '@mui/material';
interface SwipeToConfirmButtonProps {
  onConfirm: () => void;
}



const SliderCustom = styled(Slider)({
  color: '#52af77',
  height: 8,
  '& .MuiSlider-track': {
    border: '2px solid #DDC9B5',
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 35,
   
  },
  '& .MuiSlider-rail': {
    border: '2px solid #DDC9B5',
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 35,
    '&:after': {
      content: "'Slide to confirm'", // add your text here
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#D89B60',
      fontWeight: '600',
      fontSize: '1rem',
    },
  },
  '& .MuiSlider-thumb': {
    height: 70,
    width: 70,
    left: 20,
    background: 'linear-gradient(176.54deg, #6D5747 -11.89%, #B88151 64.46%)', // change background color here
    boxShadow: '0px 4px 40px rgba(160, 116, 78, 0.5)', // change box shadow here    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    "&:after": {
      content: "''",
      position: "absolute",
      width: 32,
      height: 32,
      backgroundImage: `url(${Arrow.src})`, // replace with your icon URL
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    },
  }
});

export default function SwipeToConfirmButtom({onConfirm} : SwipeToConfirmButtonProps) {
  const [value, setValue] = useState(0);
  

  const handleChange = (event: Event, newValue: number | number[]) => {
  
    if (typeof newValue === 'number') {
      try {
        setValue(newValue);
      } catch (error) {
        
      }
      
      
    }
    
    
  };

  const update = () => {

    if(!(value < 1 ||(value >= 30))) {
      setValue(0);
    }
    if(value == 30) {
      onConfirm();
    }
  };
  return (
    <Box>
      <Box sx={{ m: 3, mx: 2 }} />
      <SliderCustom
        onChange={handleChange}
        onChangeCommitted={update}
        defaultValue={0}
        max={30}
        value={value}
      />
    </Box>
  )
}



