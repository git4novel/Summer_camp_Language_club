// import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "./Banner.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
  return (
    <div className="">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={20000}
      >
      <div className="rounded-xl boxy-shadow" data-src="https://i.ibb.co/nnwYvMq/different-language-speech-bubble-hello-concept.jpg">
      <p className="  eye-catchy-text   text-3xl lg:text-7xl ">
        Language is a must! <br />
        We are here to provide you learning different languages. <br />
        Being a polyglot; <br />
        Has Massive Advantages
      </p>
    </div>
        <div data-src="https://i.ibb.co/YDBmZvZ/russian-english-communication-language-concept.jpg" >
        <p className=" eye-catchy-text text-3xl lg:text-7xl ">
        Language is a must! <br />
        We are here to provide you learning different languages. <br />
        Being a polyglot; <br />
        Has Massive Advantages
      </p>
        </div>
        <div data-src="https://i.ibb.co/CKnPgRM/learning-foreign-languages-1.jpg" >
        <p className="eye-catchy-text text-3xl lg:text-7xl ">
        Language is a must! <br />
        We are here to provide you learning different languages. <br />
        Being a polyglot; <br />
        Has Massive Advantages
      </p>
        </div>
        <div data-src="https://i.ibb.co/nnwYvMq/different-language-speech-bubble-hello-concept.jpg" />
        {/* <div data-src="https://i.ibb.co/xqpvddp/english-books-assortment-still-life.jpg" /> */}
      </AutoplaySlider>
    </div>
  );
};

export default Banner;
