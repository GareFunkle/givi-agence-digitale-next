import Link from "next/link";
import React from "react";
const OurVisionTalkAbout = () => {
  return (
    <section className='bg-dark flex h-[40vh] max-w-full flex-col items-center justify-center'>
      <div className='text-white'>
        <h2 className='mb-4 text-[4rem] font-bold'>
          Discutons de votre projet !
        </h2>
        <div className='flex justify-start'>
          <Link
            className='rounded-[calc(5rem/6.2)] bg-white px-[0.6rem] py-[0.3rem] text-[1.3rem] font-bold text-black'
            href='/contact'
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurVisionTalkAbout;
