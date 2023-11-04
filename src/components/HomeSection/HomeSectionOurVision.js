import React from "react";

import Image from "next/image";
import Link from "next/link";

const HomeOurVision = () => {
  return (
    <section className='  max-w-full  bg-dark-light text-white'>
      <div className='flex items-center justify-center pt-12'>
        <h1 className='rounded-2xl bg-pink p-4 text-5xl font-bold text-white'>
          GIVI, c'est nous!
        </h1>
      </div>
      <div className='mt-24 flex max-w-full items-center justify-center'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 '>
          <div className='relative box-border h-[225px] w-[225px] bg-pink shadow-[-20px_20px_0px_5px_#ff00aa18]  md:h-[450px]  md:w-[450px] '>
            <div className='absolute -left-20 -top-2 '>
              <h4 className='rounded-md bg-white p-2 text-5xl text-black'>
                Angie
              </h4>
              <Image
                className='absolute top-12 h-auto w-full '
                width={1000}
                height={1000}
                src='/assets/Home/OurVision/fleche-angie.png'
                alt=''
              />
            </div>

            <Image
              className='relative left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 '
              width={350}
              height={350}
              src='/assets/Home/OurVision/angie-mrhb.png'
              alt='angie couple femme'
            />
          </div>
          <div className='relative box-border h-[225px] w-[225px] bg-pink shadow-[20px_20px_0px_5px_#ff00aa18]  md:h-[450px]  md:w-[450px] '>
            <div className='absolute  -right-24 top-36 '>
              <Image
                className='absolute -top-32 right-20 h-auto w-full '
                width={1000}
                height={1000}
                src='/assets/Home/OurVision/fleche-vincent.png'
                alt=''
              />
              <h4 className='rounded-md bg-white p-2 text-5xl text-black'>
                Vincent
              </h4>
            </div>

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
      <div className='flex items-center justify-center pb-20 pt-28'>
        <Link
          href='#'
          className='group  relative overflow-hidden  rounded-[calc(5rem/6.2)] border-2 border-pink  bg-transparent  p-2 px-4 py-2 text-4xl  font-bold text-white    shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300 '
        >
          <span className='absolute inset-0 z-0 -translate-x-full transform bg-pink transition-transform duration-300 group-hover:translate-x-0'></span>
          <span className='z-8 relative'> Mieux nous connaitre </span>
        </Link>
      </div>
    </section>
  );
};

export default HomeOurVision;
