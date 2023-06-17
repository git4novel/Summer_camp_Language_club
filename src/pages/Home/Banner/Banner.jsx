// import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import "./Banner.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";

import withAutoplay from "react-awesome-slider/dist/autoplay";
const AutoplaySlider = withAutoplay(AwesomeSlider);
// https://i.ibb.co/xqpvddp/english-books-assortment-still-life.jpg
// https://i.ibb.co/YDBmZvZ/russian-english-communication-language-concept.jpg
// https://i.ibb.co/CKnPgRM/learning-foreign-languages-1.jpg
// https://i.ibb.co/nnwYvMq/different-language-speech-bubble-hello-concept.jpg
// https://i.ibb.co/8282mFZ/10412432-3735.jpg
// https://i.ibb.co/fFTnf9Q/medium-shot-smiley-friends-with-books.jpg
const Banner = () => {
  return (
    <div className="">
      <AutoplaySlider
        animation="cubeAnimation"
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={20000}
      >
         <div className="rounded-xl" data-src="https://i.ibb.co/nnwYvMq/different-language-speech-bubble-hello-concept.jpg">
      <p className="absolute bottom-0 mt-4 bg-transparent left-0 right-0 eye-catchy-text px-2  text-3xl lg:text-7xl ">
        Language is a must! <br />
        We are here to provide you learning different languages. <br />
        Being a polyglot; <br />
        Has Massive Advantages
      </p>
    </div>
        <div data-src="https://i.ibb.co/YDBmZvZ/russian-english-communication-language-concept.jpg" >
        <p className="absolute bottom-0 left-0 right-0 eye-catchy-text text-3xl lg:text-8xl ">
        Language is a must! <br />
        We are here to provide you learning different languages. <br />
        Being a polyglot; <br />
        Has Massive Advantages
      </p>
        </div>
        <div data-src="https://i.ibb.co/CKnPgRM/learning-foreign-languages-1.jpg" >
        <p className="absolute text-white bottom-0 left-0 right-0 eye-catchy-text text-3xl lg:text-8xl ">
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
