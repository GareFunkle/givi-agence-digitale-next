import React from "react";
import FormComponent from "../ui/form/form";

const HomeYourIdeas = () => {
  return (
    <section className='bg-dark flex h-[100vh] max-w-full flex-col items-center justify-center px-4'>
      <h2 className=' mb-11 text-center text-title-big font-bold text-white'>
        Discutons de vos <span className='text-beige'>idées</span> !
      </h2>
      <FormComponent />
    </section>
  );
};

export default HomeYourIdeas;
