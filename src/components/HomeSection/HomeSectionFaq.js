import React from "react";
import Accordion from "../FaqAccordion/Accordion";

const HomeSectionFaq = () => {
  return (
    <section className=' z-9 relative overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto flex items-center justify-center   lg:mb-20'>
              <h2 className='rounded-[calc(5rem/4)] bg-dark-light  pb-[0.5rem] pl-[1rem] pr-[1rem] pt-[0.5rem] text-[4rem] font-bold text-white'>
                Vos <span className='text-pink'>questions</span> les plus
                fréquentes
              </h2>
            </div>
          </div>
        </div>
        <Accordion />
      </div>
    </section>
  );
};

export default HomeSectionFaq;
