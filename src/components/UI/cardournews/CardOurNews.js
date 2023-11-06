import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardOurNews = (props) => {
  return (
    <div className='h-auto max-w-xs  bg-white '>
      <Image
        className='h-auto w-full'
        width={300}
        height={300}
        src={props.itemsNews.img}
        alt=''
      />
      <div className='rounded-b-[1rem] bg-dark-light p-5'>
        <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>
          {props.itemsNews.title} <br /> {props.itemsNews.secondTitle}
        </h5>
        <p className='mb-3 text-[0.7rem] font-normal text-white'>
          {props.itemsNews.text}
        </p>

        <Link
          href={props.itemsNews.url}
          className='group relative inline-flex items-center overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-pink bg-transparent px-4  py-2 text-base font-bold text-white  shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300'
        >
          <span className='absolute inset-0 z-0 -translate-x-full transform bg-pink transition-transform duration-300 group-hover:translate-x-0'></span>
          <span className='z-8 relative'>En savoir plus</span>
          <FontAwesomeIcon
            className='z-8 relative ml-2 h-3.5 w-3.5 '
            icon={faArrowRight}
          />
        </Link>
      </div>
    </div>
  );
};

export default CardOurNews;
