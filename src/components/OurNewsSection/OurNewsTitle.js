import React from "react";

const OurNewsTitle = () => {
  return (
    <section className='flex max-w-full flex-col items-center justify-center pt-4'>
      <h1 className='text-title-big font-bold text-black'>Nos actualités</h1>
      <div className='flex w-1/2 items-start justify-start p-10'>
        <p className='text-xl font-[500] text-black'>
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu'un simple outil : il est le terrain sur lequel les rêves prennent
          forme et les idées s'épanouissent.
        </p>
      </div>
    </section>
  );
};

export default OurNewsTitle;
