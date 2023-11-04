"use client";

import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import articleOne from "@/data/dataArticle/dataArticle";

const Article = (props) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const data = articleOne.find((item) => item.slug === props.params.slug);
    setArticle(data);
  }, [props.params.slug]);

  if (!article) {
    return (
      <div className='inline-flex rounded-2xl bg-pink p-2  text-4xl text-white'>
        Chargement de l'article...
      </div>
    );
  }

  return (
    <div className='h-auto max-w-full'>
      <div className='h-96 max-w-full  bg-hero-news bg-cover bg-center bg-no-repeat p-0 px-0 '></div>
      <div className='flex flex-col items-start justify-start px-8 sm:px-12 md:px-12 lg:px-24 xl:px-96'>
        <h1 className=' mb-12 mt-24 text-calc font-[700] text-white  '>
          <span
            style={{ filter: "url(#goo)" }}
            className='inline bg-pink  box-decoration-clone px-4 py-2 focus:outline-none '
          >
            {article.h1Title}
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

        <p className='text-2xl font-medium'>{article.pOne}</p>
        <h2 className='py-4 text-5xl font-bold text-pink'>{article.h2Title}</h2>
        <p className=' text-2xl font-medium'>{article.pTwo}</p>
        <p className='  text-2xl font-medium'>{article.pThree}</p>

        <p className='text-2xl font-medium'>{article.pFour}</p>

        <p className='text-2xl font-medium'>{article.pFive}</p>

        <h2 className='py-4 text-5xl font-bold text-pink'>
          {article.h2TitleTwo}
        </h2>
        <p className='text-2xl font-medium'>{article.pSix}</p>

        <h2 className='py-4 text-5xl font-bold text-pink'>
          {article.h2TitleThree}
        </h2>

        <p className='text-2xl font-medium'>{article.pSeven}</p>

        <p className='text-2xl font-medium'>{article.pEight}</p>

        <p className='text-2xl font-medium'>{article.pNine} </p>

        <p className='text-2xl font-medium'>{article.pTen}</p>

        <h2 className='py-4 text-5xl font-bold text-pink'>
          {article.h2TitleFour}
        </h2>

        <p className='text-2xl font-medium'>{article.pEleven}</p>

        <h2 className='py-4 text-5xl font-bold text-pink'>
          {article.h2TitleFive}
        </h2>

        <p className='text-2xl font-medium'>{article.pTwelve}</p>
      </div>
    </div>
  );
};

export default Article;
