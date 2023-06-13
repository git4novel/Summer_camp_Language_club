// import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "./Banner.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);


const Banner = () => {
  return (
    <div className="relative mb-20 max-h-[800px]">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={20000}
      >
        <div className="rounded-xl" data-src="https://img.freepik.com/free-photo/symbols-come-out-bulb-top-book_1232-908.jpg?w=1060&t=st=1686669337~exp=1686669937~hmac=88fc78abaa8b785c57405acf87c2073d17d7aa16f01870acfff21a9c8f70eb6b" >
            <p className="eye-catchy-text px-8 text-3xl lg:text-7xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, hic.</p>
        </div>
        <div data-src="https://img.freepik.com/free-photo/man-studying-home-during-online-courses-free-information-by-hisself-becomes-musician-guitarist-while-isolated-quarantine-against-coronavirus-spreading-using-laptop-smartphone-headphones_155003-39514.jpg?w=1060&t=st=1686669373~exp=1686669973~hmac=7ffe99c088d3fc323fafc5e444796886c85588bb1d0456ade7d4a1b8b7638feb" />
        <div data-src="https://as1.ftcdn.net/v2/jpg/05/12/39/26/1000_F_512392631_EukzEV6YYJjphvXIXWb1JiKTT4ywuMhw.jpg" />
        <div data-src="https://img.freepik.com/free-psd/flat-design-language-learning-template_23-2149273675.jpg?w=1380&t=st=1686669181~exp=1686669781~hmac=2590620eab4dd67ab55bf70a218b3b233c5a4d48ae7d4b9dd24f140ea50b77b7" />
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
