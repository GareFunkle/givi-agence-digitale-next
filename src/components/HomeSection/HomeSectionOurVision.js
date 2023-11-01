import React from "react";

import Image from "next/image";
import Link from "next/link";

const HomeOurVision = () => {
  return (
    <section className=' h-[100vh] max-w-full  bg-dark-light text-white'>
      <div className='flex items-center justify-center pt-12'>
        <h1 className='rounded-2xl bg-pink p-4 text-5xl font-bold text-white'>
          GIVI, c'est nous!
        </h1>
      </div>
      <div className='mt-24 flex max-w-full items-center justify-center'>
        <div className='grid grid-cols-2 gap-10 '>
          <div className='relative box-border h-[450px] w-[450px]  bg-pink  shadow-[-20px_20px_0px_5px_#ff00aa18] '>
            <Image
              className='relative left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 '
              width={350}
              height={350}
              src='/assets/Home/OurVision/angie-mrhb.png'
              alt='angie couple femme'
            />
          </div>
          <div className='box-border h-[450px] w-[450px]  bg-pink  shadow-[20px_20px_0px_5px_#ff00aa18] '>
            <Image
              className='relative left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 '
              width={500}
              height={500}
              src='/assets/Home/OurVision/vincent-drt.png'
              alt='vincent couple homme'
            />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-28'>
        <Link
          className='rounded-xl bg-white p-2 text-3xl font-bold text-black'
          href='#'
        >
          Mieux nous connaitre
        </Link>
      </div>
    </section>
  );
};

export default HomeOurVision;
