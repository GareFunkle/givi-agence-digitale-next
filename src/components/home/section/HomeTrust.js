"use client";

import React, { useState } from "react";
import { Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const HomeTrust = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "/assets/Logo/LogoClient/logo_univers_terrasses_bois.png",
    },
    {
      id: 2,
      img: "/assets/Logo/LogoClient/logo_c_chouette_alchimie.png",
    },
    {
      id: 3,
      img: "/assets/Logo/LogoClient/logo_impact_cbd.png",
    },
    {
      id: 4,
      img: "/assets/Logo/LogoClient/logo_parerga.png",
    },
    {
      id: 5,
      img: "/assets/Logo/LogoClient/logo_city_weed.png",
    },
    {
      id: 6,
      img: "/assets/Logo/LogoClient/logo_excellium_nutrition.png",
    },
  ]);
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay
      spaceBetween={0}
      slidesPerView={3}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.img} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeTrust;
