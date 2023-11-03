import Image from "next/image";
import Link from "next/link";
import React from "react";
import CardOurNews from "../ui/cardournews/CardOurNews";

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
];
const HomeOurNews = () => {
  return (
    <section className='mt-[4rem] flex flex-col items-center justify-center'>
      <h2 className='text-[5rem] font-bold'>
        Nos dernières <span className='text-pink'>actualités</span>
      </h2>
      <div className='mt-[2rem] grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3  '>
        {itemsNews.map((item) => (
          <CardOurNews key={item.id} itemsNews={item} />
        ))}
      </div>
      <hr className='mb-[3rem] mt-[3rem] w-[60%] border-[1px] border-black' />
    </section>
  );
};

export default HomeOurNews;
