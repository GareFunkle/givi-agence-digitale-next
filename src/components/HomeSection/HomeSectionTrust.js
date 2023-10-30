import React from 'react';
import Image from 'next/image';

const itemsTrust = [
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
];

const HomeTrust = () => {
  return (
    <section className='h-auto max-w-full '>
      <div className='flex items-center justify-center'>
        <h1 className='pt-12 text-6xl font-bold'>Références</h1>
      </div>

      <div className='inline-flex w-full flex-nowrap overflow-hidden'>
        <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
          {itemsTrust.map((image, index) => (
            <li key={index}>
              <Image
                className='h-auto w-auto'
                width={350}
                height={350}
                src={image.url}
                alt=''
              />
            </li>
          ))}
        </ul>
        <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
          {itemsTrust.map((image, index) => (
            <li key={index}>
              <Image
                className='h-auto w-auto'
                width={350}
                height={350}
                src={image.url}
                alt=''
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default HomeTrust;
