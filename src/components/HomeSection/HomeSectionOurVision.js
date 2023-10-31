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
        <div className='grid grid-cols-2 gap-8 '>
          <div className=' box-border h-[500px] w-[500px]  bg-pink  shadow-[5px_5px_0px_0px_rgba(109,40,217)] '>
            <div className=''>
              <p>text 1</p>
            </div>
          </div>
          <div className='box-border h-[500px] w-[500px]  bg-pink '>
            <p>text 2</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOurVision;
