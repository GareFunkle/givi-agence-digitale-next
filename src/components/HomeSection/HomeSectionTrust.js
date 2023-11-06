import React from "react";
import Image from "next/image";

const itemsTrust = [
  {
    url: "/logo/logoclient/LOGO-UNIVERS-TERRASSES-BOIS-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/logo/logoclient/LOGO-CITY-WEED-CBD-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/logo/logoclient/LOGO-EXCELLIUM-NUTRITION-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/logo/logoclient/LOGO-IMPACT-CBD-SHOP-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
  {
    url: "/logo/logoclient/LOGO-PARERGA-GIVI-AGENCE-DIGITALE-COMMUNICATION.png",
  },
];

const HomeTrust = () => {
  return (
    <section className='h-auto max-w-full '>
      <div className='flex items-center justify-center'>
        <h1 className='pt-12 text-title-big font-bold'>Références</h1>
      </div>

      <div className='inline-flex w-full flex-nowrap overflow-hidden'>
        <ul className='flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8'>
          {itemsTrust.map((image, index) => (
            <li key={index}>
              <Image
                className='w-80'
                width={400}
                height={400}
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
                className=' w-80'
                width={400}
                height={400}
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
