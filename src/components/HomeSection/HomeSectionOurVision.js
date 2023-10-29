import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const HomeOurVision = () => {
  return (
    <section className='flex h-[100vh] max-w-full justify-center bg-dark-light text-white'>
      <div className='flex w-[35%] flex-col justify-center pr-[2rem]'>
        <h2 className='mb-[2rem] text-[4rem]'>Notre vision</h2>
        <p className='text-[1.5rem]'>
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu&#39;un simple outil : il est le terrain sur lequel les rêves
          prennent forme et les idées s&#39;épanouissent.
        </p>
        <br />
        <p className='text-[1.5rem]'>
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <br />
        <p className='text-[1.5rem]'>
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d&#39;assurer que votre voix soit entendue dans cette
          vaste mer d&#39;innovations.
        </p>
        <br />
        <p className='text-[1.5rem]'>
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
        <div className='mt-[2rem] flex items-center'>
          <Link
            href='/notre-vision'
            className='rounded-[calc(5rem/8)] bg-white pb-[0.7rem] pl-[0.2rem] pr-[0.2rem] pt-[0.7rem] text-[1.2rem] font-bold text-black no-underline'
          >
            en savoir plus
          </Link>
        </div>
      </div>
      <div className='flex items-center'>
        <Image
          width={500}
          height={400}
          className='rounded-[2rem]'
          src='/assets/Home/OurVision/couple_givi.jpg'
          alt='couple union force '
        />
      </div>
    </section>
  );
};

export default HomeOurVision;
