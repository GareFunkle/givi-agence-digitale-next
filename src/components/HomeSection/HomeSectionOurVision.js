import React from "react";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../ui/button/LinkButton";

const HomeOurVision = () => {
  return (
    <section className='  bg-dark  max-w-full text-white'>
      <div className='flex items-center justify-center pt-12'>
        <h1 className='rounded-2xl bg-beige p-4 text-title-medium font-bold text-white'>
          GIVI, c'est nous!
        </h1>
      </div>
      <div className='mt-24 flex max-w-full items-center justify-center'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 '>
          <div className='relative box-border h-[225px] w-[225px] bg-beige shadow-[-20px_20px_0px_5px_#ff00aa18]  md:h-[450px]  md:w-[450px] '>
            <div className='absolute -left-20 -top-2 '>
              <h4 className='rounded-md bg-white p-2 text-5xl text-black'>
                Angie
              </h4>
              <Image
                className='absolute top-12 h-auto w-full '
                width={1000}
                height={1000}
                src='/home/ourvision/fleche-angie.png'
                alt=''
              />
            </div>
          </div>
          <div className='relative box-border h-[225px] w-[225px] bg-beige shadow-[20px_20px_0px_5px_#ff00aa18]  md:h-[450px]  md:w-[450px] '>
            <div className='absolute  -right-24 top-36 '>
              <Image
                className='absolute -top-32 right-20 h-auto w-full '
                width={1000}
                height={1000}
                src='/home/ourvision/fleche-vincent.png'
                alt=''
              />
              <h4 className='rounded-md bg-white p-2 text-5xl text-black'>
                Vincent
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pb-20 pt-28'>
        <LinkButton href='/notre-vision'>Mieux nous connaitre</LinkButton>
      </div>
    </section>
  );
};

export default HomeOurVision;
