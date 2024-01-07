import { businessmanager, clotheswoman, coffeeman, manwatchproducts } from '../../assets'

import React from "react";
import Slider from "react-slick";

const ValueSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false
  };

  return (
    <div className="container mx-auto">
      <Slider {...settings}>
        <div className="relative">
          <img src={businessmanager} className="w-full rounded-lg" alt="test" />
        </div>
        <div className="relative">
          <img src={manwatchproducts} className="w-full rounded-lg" alt="test" />
        </div>
        <div className="relative">
          <img src={clotheswoman} className="w-full rounded-lg" alt="test" />
        </div>
        <div className="relative">
          <img src={coffeeman} className="w-full rounded-lg" alt="test" />
        </div>
      </Slider>
    </div>
  );
};

export default ValueSlider;
