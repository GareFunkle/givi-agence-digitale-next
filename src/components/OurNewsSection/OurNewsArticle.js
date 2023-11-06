import React from "react";
import CardOurNews from "../ui/cardournews/CardOurNews";

const itemsNews = [
  {
    id: 1,
    img: "/home/ournews/news-one.jpg",
    title: "Réussir sa  communication  :",
    secondTitle: "les clés d'une Agence performante",
    text: "À l'ère du numérique, la communication est devenue un outil essentiel pour se démarquer...",
    url: "/nos-actualites/article-1",
  },
  {
    id: 2,
    img: "/home/ournews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-2",
  },
  {
    id: 3,
    img: "/home/ournews/news-three.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-3",
  },
  {
    id: 4,
    img: "/home/ournews/news-one.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-1",
  },
  {
    id: 5,
    img: "/home/ournews/news-two.jpg",
    title: "I'm SamiraHadid.",
    secondTitle: "Nice to meet you!",
    text: "Women's rights lawyer, founder of Girls for Arts International, cook, and proud mother of 2",
    url: "/nos-actualites/article-2",
  },
  {
    id: 6,
    img: "/home/ournews/news-three.jpg",
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
          <CardOurNews key={item.id} itemsNews={item} />
        ))}
      </div>
    </div>
  );
};

export default OurNewsArticle;
