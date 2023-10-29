import React from 'react';
import { faDiamond } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const itemsStrongPoint = [
  {
    id: 1,
    number: '1',
    title: ' Découverte',
    text: 'Nous prenons le temps de vraiment comprendre vos besoins et aspirations',
  },
  {
    id: 2,
    number: '2',
    title: 'Stratégie',
    text: 'Nous prenons le temps de vraiment comprendre vos besoins et aspirations',
  },
  {
    id: 3,
    number: '3',
    title: 'Conception',
    text: 'Nous prenons le temps de vraiment comprendre vos besoins et aspirations',
  },
  {
    id: 4,
    number: '4',
    title: 'Analyse et optimisation',
    text: 'Nous prenons le temps de vraiment comprendre vos besoins et aspirations',
  },
];
const HomeStrongPoint = () => {
  return (
    <section className='bg-dark-light flex h-[30vh] items-center justify-between px-[2rem] py-[2rem] text-white'>
      <div className='flex max-w-full flex-row items-center'>
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
              <h3 className='text-pink mb-2 text-xl font-bold'>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeStrongPoint;
