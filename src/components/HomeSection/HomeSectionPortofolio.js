import Link from 'next/link';
import React from 'react';

const HomeSectionPortofolio = () => {
  return (
    <div className='flex h-[70vh] max-w-full flex-col items-center justify-center bg-dark-light'>
      <Link
        className='rounded-3xl bg-white px-4 py-3 text-3xl font-bold text-black '
        href='/nos-projets'
      >
        Voir plus
      </Link>
    </div>
  );
};

export default HomeSectionPortofolio;
