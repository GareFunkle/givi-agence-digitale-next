import React from 'react';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <section className='m-w-[100%] h-[100vh] bg-hero-pattern bg-cover bg-center bg-no-repeat'>
      <div className='relative left-[10%] top-[15%] w-[77%]'>
        <div className='rounded-[calc(5rem/2.8)]  bg-white pb-[0.5rem] pl-[1rem] pr-[1rem] pt-[0.5rem]'>
          <h1 className='text-[3rem] font-bold'>
            L&#39;harmonie du Yin et Yang appliquée à votre
            <span className='text-[#9e0168]'> stratégie digitale</span>
          </h1>
        </div>
        <div className='m-w-[100%] mt-[2rem]'>
          <Link
            href='/contact'
            className='w-[100%] rounded-[calc(5rem/6.2)] bg-black px-[0.9rem] py-[0.4rem] text-[2rem] font-bold text-white'
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
