import React from "react";

const Banner = ({ imageUrl, title }) => {
  return (
    <div className="relative">
      <img
        src={imageUrl}
        alt="Banner"
        className="w-full h-[200px] object-cover "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-950 to-red-950 opacity-50"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
