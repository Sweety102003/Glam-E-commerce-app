import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { SlArrowLeft  } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const ImageSlider=({slides}) => {
    const [current,setCurrent]=useState(0);
    const length=slides.length;
    const nextSlide=()=>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const previousSlide=()=>{
        setCurrent(current === 0 ? length  - 1 : current - 1);
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
      }
    
  return (
    <div className="slider">
        <SlArrowLeft className="left-arrow" onClick={previousSlide} />
        <SlArrowRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide,index)=>{
            return(
                <div 
                // className={index === current ? 'slide active' : 'slide'} 
                key={index}>
                    {index===current&&(<img src={slide.image} alt="travelimage" className="image" />)}
                    </div>
            );
        })}

    </div>
  )
}

export default ImageSlider