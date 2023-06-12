// import React from 'react';
import "./Banner.css";
import 'react-awesome-slider/dist/styles.css';

const Banner = () => {
  return (
    <div className="">
      <AwesomeSlider animation="cubeAnimation">
        <div data-src="/path/to/image-0.png" />
        <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" />
      </AwesomeSlider>
    </div>
  );
};

export default Banner;
