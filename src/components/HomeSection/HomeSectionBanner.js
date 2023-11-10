"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const HomeBanner = () => {
  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    " gestion des réseaux sociaux",
    " conception de site internet",
    " SEO",
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < texts[textIndex].length) {
        setText((prevText) => prevText + texts[textIndex].charAt(i));
        i++;
      } else {
        setText("");
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        i = 0;
      }
    }, 150);
    return () => clearInterval(timer);
  }, [textIndex]);
  return (
    <section className='m-w-full h-[70vh]  bg-hero-background bg-cover bg-top bg-no-repeat'>
      <div className='relative left-[5%] top-[5%] w-[77%] sm:left-[8%] sm:top-[7%] md:left-[10%] md:top-[35%]'>
        <div>
          <h1 className=' text-title-medium font-[700] transition duration-300  '>
            <span
              style={{ filter: "url(#goo)" }}
              className='inline bg-white box-decoration-clone px-4 py-2 focus:outline-none '
            >
              Agence de communication digitale, <br /> spécialisée dans la
              <span className='text-pink transition duration-300'> {text}</span>
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
        <div className='m-w-full mt-[2rem] flex items-start justify-end pr-8'>
          <Link
            href='/contact'
            className='group relative mr-4 overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-pink bg-pink px-4 py-2 text-4xl font-bold text-white shadow-[5px_5px_0px_0px_#ff00aa18] transition-all duration-300'
          >
            <span className='z-8 relative'> Nous contacter </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
