import Image from 'next/image';
import React from 'react';

const OurVisionUs = () => {
  return (
    <section className='mt-12 flex max-w-full flex-col items-center'>
      <Image
        width={800}
        height={500}
        className='h-auto w-auto'
        src='/assets/Vision/Us/4.png'
        alt='nous couple best'
      />
      <div className='flex flex-row items-center justify-evenly '>
        <div className='item-center flex w-[20%] flex-col justify-center p-8'>
          <p className='text-[1.5rem]'>
            Dans un monde en constante évolution, le digital est devenu bien
            plus qu&#39;un simple outil
          </p>
        </div>
        <div className='item-center flex w-[20%] flex-col justify-center p-8'>
          <p className='text-[1.5rem]'>
            Dans un monde en constante évolution, le digital est devenu bien
            plus qu&#39;un simple outil
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurVisionUs;
