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
    }, 100);
    return () => clearInterval(timer);
  }, [textIndex]);
  return (
    <section className='m-w-full h-[70vh]  bg-hero-background bg-cover bg-top bg-no-repeat'>
      <div className='absolute left-0 top-0 h-[70vh] w-full bg-[#f1f1f13a]'></div>
      <div className='relative left-[5%] top-[5%] w-[77%] sm:left-[8%] sm:top-[7%] md:left-[10%] md:top-[35%]'>
        <div>
          <h1 className=' text-title-medium font-[700] transition duration-300  '>
            <span
              style={{ filter: "url(#goo)" }}
              className='inline px-4 py-2 focus:outline-none  '
            >
              Agence de communication digitale, <br /> spécialisée dans la
              <span className='text-brown-light transition duration-300'>
                {" "}
                {text}
              </span>
            </span>
          </h1>
        </div>
        <div className='m-w-full mt-[2rem] flex items-start justify-end pr-8'>
          <Link
            href='/contact'
            className=' bg-brown-light group relative mr-4 overflow-hidden rounded-[calc(5rem/6.2)]  px-4 py-2 text-4xl font-bold text-white transition-all duration-300'
          >
            <span className='z-8 relative'> Nous contacter </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
