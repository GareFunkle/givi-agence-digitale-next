import React from "react";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const itemsStrongPoint = [
  {
    id: 1,
    number: "1",
    title: " Découverte",
    text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
  },
  {
    id: 2,
    number: "2",
    title: "Stratégie",
    text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
  },
  {
    id: 3,
    number: "3",
    title: "Conception",
    text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
  },
  {
    id: 4,
    number: "4",
    title: "Analyse et optimisation",
    text: "Nous prenons le temps de vraiment comprendre vos besoins et aspirations",
  },
];
const HomeStrongPoint = () => {
  return (
    <section className='flex  items-center justify-between bg-dark-light px-12 py-12 text-white'>
      <div className='grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:grid-cols-4'>
        {itemsStrongPoint.map((item) => (
          <div
            className='flex w-full items-center justify-center'
            key={item.id}
          >
            <p className='flex items-baseline text-[7rem]'>
              {item.number}
              <FontAwesomeIcon className='text-[0.8rem]' icon={faDiamond} />
            </p>
            <div className='mr-[2rem] flex w-full flex-col p-[1rem]'>
              <h3 className='mb-2 text-xl font-bold text-pink'>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStrongPoint;
