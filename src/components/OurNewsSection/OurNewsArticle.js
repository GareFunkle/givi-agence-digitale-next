import Image from "next/image";
import Link from "next/link";
import React from "react";

const itemsNews = [
  {
    id: 1,
    img: "/assets/Home/OurNews/news-one.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-1",
  },
  {
    id: 2,
    img: "/assets/Home/OurNews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-2",
  },
  {
    id: 3,
    img: "/assets/Home/OurNews/news-three.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-3",
  },
  {
    id: 4,
    img: "/assets/Home/OurNews/news-one.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-1",
  },
  {
    id: 5,
    img: "/assets/Home/OurNews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-2",
  },
  {
    id: 6,
    img: "/assets/Home/OurNews/news-three.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-3",
  },
];

const OurNewsArticle = () => {
  return (
    <div className='mt-8 flex  justify-center'>
      <div className='sm:grid-col-2 grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-3'>
        {itemsNews.map((item) => (
          <div key={item.id} className='max-w-[19rem] bg-white '>
            <Image
              className='h-auto w-full'
              width={300}
              height={150}
              src={item.img}
              alt=''
            />

            <div className='rounded-b-[1rem] bg-dark-light p-5'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                {item.title} <br /> {item.secondTitle}
              </h5>

              <p className='mb-3 text-[0.7rem] font-normal text-white'>
                {item.text}
              </p>
              <Link
                href={item.url}
                className='group relative inline-flex items-center overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-pink bg-transparent px-4  py-2 text-base font-bold text-white  shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300'
              >
                <span className='absolute inset-0 z-0 -translate-x-full transform bg-pink transition-transform duration-300 group-hover:translate-x-0'></span>
                <span className='z-8 relative'>En savoir plus</span>
                <svg
                  className='z-8 relative ml-2 h-3.5 w-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurNewsArticle;
