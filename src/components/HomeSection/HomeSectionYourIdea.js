import React from "react";

const HomeYourIdeas = () => {
  return (
    <section className='flex h-[100vh] max-w-full flex-col items-center justify-center bg-dark-light'>
      <h2 className='mb-11 text-6xl font-bold text-white'>
        Discutons de vos <span className='text-pink'>idées</span> !
      </h2>
      <div className='w-1/3 rounded-3xl bg-white'>
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
            className='my-8 rounded-[calc(5rem/8)] bg-dark-light px-2.5 py-1 text-2xl font-bold text-white transition duration-500 hover:bg-pink '
            type='submit'
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeYourIdeas;
