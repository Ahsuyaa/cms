import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const slideData = [
  {
    imageUrl:
      "https://jango.nikadevs.com/assets/base/img/content/backgrounds/bg-43.jpg",
    caption: "First Slide",
  },
  {
    imageUrl:
      "https://jango.nikadevs.com/assets/base/img/content/backgrounds/bg-20.jpg",
    caption: "Second Slide",
  },
  {
    imageUrl:
      "https://jango.nikadevs.com/assets/base/img/content/backgrounds/bg-43.jpg",
    caption: "Third Slide",
  },
];

const Slider = () => {
  return (
    <div className="relative slider">
      <AwesomeSlider>
        {slideData.map((slide, index) => (
          <div key={index} className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-950 opacity-50 z-10"></div>
            <img
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white z-10">
              <p className="text-lg font-bold">{slide.caption}</p>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Slider;
