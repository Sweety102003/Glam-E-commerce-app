import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function Cards({slides}) {
  return (
   <ImageSlider slides={slides} />
  )
}

export default Cards