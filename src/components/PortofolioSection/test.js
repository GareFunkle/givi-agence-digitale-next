"use client";

import React, { useEffect, useState } from "react";
import ColorThief from "colorthief";

const ImageWithShadow = () => {
  const [boxShadowColor, setBoxShadowColor] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Important pour les images CORS
    img.src =
      "/assets/Home/Gallery/agence-digital-cannes-conception-site-internet.jpg";
    img.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(img);
      const rgbColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      setBoxShadowColor(rgbColor);
    };
  }, []);

  const handleMouseOver = () => {
    if (boxShadowColor) {
      document.getElementById(
        "image-container"
      ).style.boxShadow = `0 0 10px ${boxShadowColor}`;
    }
  };

  const handleMouseOut = () => {
    document.getElementById("image-container").style.boxShadow = "";
  };

  return (
    <div
      id='image-container'
      className='rounded-xl'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ display: "inline-block" }}
    >
      <img
        className='rounded-xl'
        src='/assets/Home/Gallery/agence-digital-cannes-conception-site-internet.jpg'
        alt='Dynamic Shadow'
      />
    </div>
  );
};

export default ImageWithShadow;
