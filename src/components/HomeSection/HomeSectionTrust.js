'use client';

import React from 'react';
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';

const itemsTrust = [
  {
    id: 1,
    img: '/assets/Logo/LogoClient/logo_univers_terrasses_bois.png',
  },
  {
    id: 2,
    img: '/assets/Logo/LogoClient/logo_c_chouette_alchimie.png',
  },
  {
    id: 3,
    img: '/assets/Logo/LogoClient/logo_impact_cbd.png',
  },
  {
    id: 4,
    img: '/assets/Logo/LogoClient/logo_parerga.png',
  },
  {
    id: 5,
    img: '/assets/Logo/LogoClient/logo_city_weed.png',
  },
  {
    id: 6,
    img: '/assets/Logo/LogoClient/logo_excellium_nutrition.png',
  },
];
const HomeTrust = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div className='pt-12 text-6xl font-bold'>Ils nous font confiance</div>
      </div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay
        spaceBetween={0}
        slidesPerView={3}
      >
        {itemsTrust.map((item) => (
          <SwiperSlide key={item.id}>
            <Image width={500} height={400} src={item.img} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HomeTrust;
