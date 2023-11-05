import React from "react";

const HomeYourIdeas = () => {
  return (
    <section className='flex h-[100vh] max-w-full flex-col items-center justify-center bg-dark-light px-4'>
      <h2 className=' mb-11 text-center text-6xl font-bold text-white'>
        Discutons de vos <span className='text-pink'>idées</span> !
      </h2>
      <div className='w-full  rounded-3xl bg-white sm:w-1/2 md:w-1/2'>
        <form className='flex flex-col items-center justify-center px-16 py-8'>
          <input
            className='mx-0 my-4 w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
            type='text'
            placeholder='Nom'
          />
          <input
            className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
            type='text'
            placeholder='Prénom'
          />
          <input
            className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
            type='mail'
            placeholder='E-mail'
          />
          <input
            className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
            type='text'
            placeholder='Tél'
          />
          <input
            className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
            type='text'
            placeholder='Détaillez-nous votre projet..'
          />
          <button
            className='group  relative overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-pink bg-transparent px-4  py-2 text-2xl font-bold text-black  shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300 '
            type='submit'
          >
            <span className='absolute inset-0 z-0 -translate-x-full transform bg-pink transition-transform duration-300 group-hover:translate-x-0'></span>
            <span className='z-8 relative'> Envoyer </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeYourIdeas;
