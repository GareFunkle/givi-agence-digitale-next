'use client';

import React, { useState } from 'react';
import Link from 'next/link';
const HeaderItems = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
        aria-controls='navbar-default'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='h-5 w-5 text-[#FE277E]'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
      <div
        className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
        id='navbar-default'
      >
        <ul className='mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-[1.2rem] font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white  md:p-0'>
          <li>
            <Link
              className='block  border-[#FE277E]  transition   delay-150 ease-in-out hover:border-b hover:transition-all  md:hover:border-pink'
              href='/nos-projets'
            >
              Nos projets
            </Link>
          </li>
          <li>
            <Link
              className='block  border-[#FE277E]  transition   delay-150 ease-in-out hover:border-b hover:transition-all  md:hover:border-pink'
              href='/notre-vision'
            >
              Notre vision
            </Link>
          </li>
          <li>
            <Link
              className='block  border-[#FE277E]  transition   delay-150 ease-in-out hover:border-b hover:transition-all  md:hover:border-pink'
              href='/nos-actualites'
            >
              Nos actualités
            </Link>
          </li>
          <li>
            <Link
              className='block  border-[#FE277E]  transition   delay-150 ease-in-out hover:border-b hover:transition-all  md:hover:border-pink'
              href='/contact'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderItems;
