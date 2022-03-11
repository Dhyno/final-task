import { useState, useRef, useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt';

export function Tilt(props) {
    const { options, ...rest } = props;
    const tilt = useRef(null);
  
    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);
  
    return <div ref={tilt} {...rest} />;
}

 export const options = {
    scale: 1.07,
    speed: 1000,
    max: 30
  };