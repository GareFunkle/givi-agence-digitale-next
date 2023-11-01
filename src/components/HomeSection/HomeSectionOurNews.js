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
  },
  {
    id: 2,
    img: "/assets/Home/OurNews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
  },
  {
    id: 3,
    img: "/assets/Home/OurNews/news-three.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
  },
];
const HomeOurNews = () => {
  return (
    <section className='mt-[4rem] flex flex-col items-center justify-center'>
      <h2 className='text-[5rem] font-bold'>
        Nos dernières <span className='text-pink'>actualités</span>
      </h2>
      <div className='mt-[2rem] grid grid-cols-3 gap-x-8 gap-y-4  '>
        {itemsNews.map((item) => (
          <div key={item.id} className='max-w-xs   bg-white '>
            <Link href='/nos-actualites'>
              <Image
                className='h-auto w-full'
                width={300}
                height={150}
                src={item.img}
                alt=''
              />
            </Link>
            <div className='rounded-b-[1rem] bg-dark-light p-5'>
              <Link href='/nos-actualites'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                  {item.title} <br /> {item.secondTitle}
                </h5>
              </Link>
              <p className='mb-3 text-[0.7rem] font-normal text-white'>
                {item.text}
              </p>
              <Link
                href='/nos-actualites'
                className='inline-flex items-center rounded-lg bg-white px-3 py-2 text-center text-sm font-medium text-black'
              >
                En savoir plus
                <svg
                  className='ml-2 h-3.5 w-3.5'
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
