// import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "./Banner.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {
  return (
    <div className="relative mb-20">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={20000}
      >
        <div className="rounded-xl" data-src="https://i.ibb.co/FKXyCnL/img.jpg" >
            <p className="eye-catchy-text px-8 text-3xl lg:text-7xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic.</p>
        </div>
        <div data-src="https://i.ibb.co/j6PDrw6/soup-bg.jpg" />
        <div data-src="https://i.ibb.co/B6KRBL0/salad-bg.jpg" />
        <div data-src="https://i.ibb.co/B6KRBL0/salad-bg.jpg" />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
