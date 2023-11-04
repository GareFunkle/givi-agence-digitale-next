import React from "react";

import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OurVisionQuote = () => {
  return (
    <section className='flex h-[50vh] max-w-full items-center justify-center p-8'>
      <div className='rounded-[4rem] bg-dark-light px-12 py-8 text-white'>
        <span className='flex justify-start text-[3rem]'>
          <FontAwesomeIcon className='text-pink' icon={faQuoteLeft} />
        </span>
        <div className='pl-14 pr-12'>
          <p className='flex justify-center text-3xl'>
            Chez GIVI notre vision est claire : vous guider et vous accompagner
            dans cet univers. Ensemble, explorons les opportunités du monde 2.0
            et construisons votre succès.
          </p>
        </div>
        <span className='flex justify-end text-[3rem]'>
          <FontAwesomeIcon className='text-pink' icon={faQuoteRight} />
        </span>
      </div>
    </section>
  );
};

export default OurVisionQuote;
