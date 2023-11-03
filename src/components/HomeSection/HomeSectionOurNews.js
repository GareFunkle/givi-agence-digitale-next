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
    link: "/nos-actualites/article-1",
  },
  {
    id: 2,
    img: "/assets/Home/OurNews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    link: "/nos-actualites/article-2",
  },
  {
    id: 3,
    img: "/assets/Home/OurNews/news-three.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    link: "/nos-actualites/article-3",
  },
];
const HomeOurNews = () => {
  return (
    <section className='mt-[4rem] flex flex-col items-center justify-center'>
      <h2 className='text-[5rem] font-bold'>
        Nos dernières <span className='text-pink'>actualités</span>
      </h2>
      <div className='mt-[2rem] grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3  '>
        {itemsNews.map((item) => (
          <div key={item.id} className='max-w-xs   bg-white '>
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
                href={item.link}
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
      <hr className='mb-[3rem] mt-[3rem] w-[60%] border-[1px] border-black' />
    </section>
  );
};

export default HomeOurNews;
