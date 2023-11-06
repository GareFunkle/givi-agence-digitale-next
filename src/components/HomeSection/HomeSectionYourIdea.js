import React from "react";
import FormComponent from "../ui/form/form";

const HomeYourIdeas = () => {
  return (
    <section className='flex h-[100vh] max-w-full flex-col items-center justify-center bg-dark-light px-4'>
      <h2 className=' mb-11 text-center text-title-big font-bold text-white'>
        Discutons de vos <span className='text-pink'>idées</span> !
      </h2>
      <FormComponent />
    </section>
  );
};

export default HomeYourIdeas;
