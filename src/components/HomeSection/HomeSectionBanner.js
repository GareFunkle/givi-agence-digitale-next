import React from 'react';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <section className='m-w-[100%] bg-hero-background h-[100vh] bg-cover bg-center bg-no-repeat'>
      <div className='relative left-[10%] top-[15%] w-[77%]'>
        <div>
          <h1 className=' text-[2.5rem] font-[700]  '>
            <span
              style={{ filter: 'url(#goo)' }}
              className='inline bg-white box-decoration-clone px-4 py-2 focus:outline-none '
            >
              Agence de
              <span className='text-pink'> communication digitale</span>,
              spécialisée dans la
              <span className='text-pink'> gestion des réseaux sociaux</span> et
              la création de
              <span className='text-pink'> site internet</span>.
            </span>
          </h1>
          <svg
            className='absolute hidden'
            width='0'
            height='0'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
          >
            <defs>
              <filter id='goo'>
                <feGaussianBlur
                  in='SourceGraphic'
                  stdDeviation='10'
                  result='blur'
                />
                <feColorMatrix
                  in='blur'
                  mode='matrix'
                  values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
                  result='goo'
                />
                <feComposite in='SourceGraphic' in2='goo' operator='atop' />
              </filter>
            </defs>
          </svg>
        </div>
        <div className='m-w-[100%] mt-[2rem]'>
          <Link
            href='/contact'
            className='bg-dark-light hover:bg-pink w-[100%] rounded-[calc(5rem/6.2)] px-[0.9rem] py-[0.4rem] text-[2rem] font-bold text-white transition delay-75 ease-out'
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
