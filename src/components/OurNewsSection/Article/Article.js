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
      <div className='h-96  max-w-full bg-hero-news bg-cover bg-center bg-no-repeat px-0 '></div>
      <div className='flex flex-col items-start justify-start px-52'>
        <h1 className='bg-pink p-2 text-two font-bold text-white '>
          {article.h1Title}
        </h1>

        <p className='text-2xl font-medium'>{article.pOne}</p>
        <h2 className='py-4 text-2xl font-bold text-pink'>{article.h2Title}</h2>
        <p className='text-2xl font-medium'>{article.pTwo}</p>
        <p className='text-2xl font-medium'>{article.pThree}</p>

        <p className='text-2xl font-medium'>{article.pFour}</p>
        <p className='text-2xl font-medium'>{article.pFive}</p>

        <h2 className='py-4 text-2xl font-bold text-pink'>
          {article.h2TitleTwo}
        </h2>
        <p className='text-2xl font-medium'>{article.pSix}</p>

        <h2 className='py-4 text-2xl font-bold text-pink'>
          {article.h2TitleThree}
        </h2>

        <p className='text-2xl font-medium'>{article.pSeven}</p>

        <p className='text-2xl font-medium'>{article.pEight}</p>

        <p className='text-2xl font-medium'>{article.pNine} </p>

        <p className='text-2xl font-medium'>{article.pTen}</p>

        <h2 className='py-4 text-2xl font-bold text-pink'>
          {article.h2TitleFour}
        </h2>

        <p className='text-2xl font-medium'>{article.pEleven}</p>

        <h2 className='py-4 text-2xl font-bold text-pink'>
          {article.h2TitleFive}
        </h2>

        <p className='text-2xl font-medium'>{article.pTwelve}</p>
      </div>
    </div>
  );
};

export default Article;
