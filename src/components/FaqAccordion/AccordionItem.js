"use client";

import React, { useState } from "react";

const AccordionItem = ({ items }) => {
  const [active, setActive] = useState(-1);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(-1); // Si l'élément est déjà ouvert, fermez-le
    } else {
      setActive(index); // Sinon, ouvrez l'élément sélectionné
    }
  };

  return (
    <div className='w-full px-4 lg:w-1/2'>
      {items.map((item, index) => (
        <div
          key={index}
          className='group relative mb-8 inline-block w-full  overflow-hidden rounded-sm bg-white p-4  px-12 py-3   text-sm font-medium text-slate-800 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] focus:outline-none focus:ring  sm:p-8 lg:px-6 xl:px-8'
        >
          <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-pink transition-all duration-200 group-hover:w-full'></span>
          <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-pink transition-all duration-200 group-hover:h-full'></span>
          <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-pink transition-all duration-200 group-hover:w-full'></span>
          <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-pink transition-all duration-200 group-hover:h-full'></span>
          <button
            className={`faq-btn flex w-full text-left`}
            onClick={() => handleToggle(index)}
          >
            <div className='bg-primary/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg dark:bg-white/5'>
              <svg
                className={`fill-primary stroke-primary duration-200 ease-in-out ${
                  active === index ? "rotate-180" : ""
                }`}
                width='17'
                height='10'
                viewBox='0 0 17 10'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z'
                  fill=''
                  stroke=''
                />
              </svg>
            </div>

            <div className='w-full'>
              <h4 className='text-dark mt-1 text-xl font-semibold dark:text-white'>
                {item.title}
              </h4>
            </div>
          </button>

          <div
            className={`pl-[62px] duration-200 ease-in-out ${
              active === index ? "block" : "hidden"
            }`}
          >
            <p className='text-body-color dark:text-dark-6 py-3 text-base leading-relaxed'>
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionItem;
