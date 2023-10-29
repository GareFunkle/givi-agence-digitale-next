'use client';

import React from 'react';
import Image from 'next/image';

const itemsTrust = [
  [
    {
      url: '/assets/Logo/LogoClient/LOGO-UNIVERS-TERRASSES-BOIS-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-CITY-WEED-CBD-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-EXCELLIUM-NUTRITION-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-IMPACT-CBD-SHOP-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-PARERGA-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
  ],
  [
    {
      url: '/assets/Logo/LogoClient/LOGO-UNIVERS-TERRASSES-BOIS-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-CITY-WEED-CBD-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-EXCELLIUM-NUTRITION-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-IMPACT-CBD-SHOP-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
    {
      url: '/assets/Logo/LogoClient/LOGO-PARERGA-GIVI-AGENCE-DIGITALE-COMMUNICATION.png',
    },
  ],
];

const HomeTrust = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h1 className='pt-12 text-6xl font-bold'>Ils nous font confiance</h1>
      </div>

      {/* <div className='relative flex overflow-x-hidden'>
        {itemsTrust.map((image, index) => (
          <div key={index} className='animate-marquee whitespace-nowrap py-12'>
            <Image width={300} height={200} src={image.url} alt='' />
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default HomeTrust;
