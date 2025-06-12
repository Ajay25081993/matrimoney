import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "../Carousel/Carousel";

const SuccessStory = () => {
  // className="w-full flex  items-center justify-center "
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-red-500 mb-20 text-4xl text-center">
        Matrimony Service with Millions of Success Stories
      </p>
      <Carousel />
    </div>
  );
};

export default SuccessStory;
