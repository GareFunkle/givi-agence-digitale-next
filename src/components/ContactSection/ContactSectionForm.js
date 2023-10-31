import React from "react";

const ContactSectionForm = () => {
  return (
    <section className='flex max-w-full flex-col items-center justify-center'>
      <form action='#' className='flex w-1/4 flex-col p-6'>
        <input
          className='border-0 border-b-2 border-black px-12 py-4 text-2xl text-black placeholder:text-black focus:outline-none'
          type='text'
          placeholder='Nom'
        />
        <input
          className='border-0 border-b-2 border-black px-12 py-4 text-2xl text-black placeholder:text-black focus:outline-none '
          type='text'
          placeholder='Prénom'
        />
        <input
          className='border-0 border-b-2 border-black px-12 py-4 text-2xl text-black placeholder:text-black focus:outline-none'
          type='text'
          placeholder='E-mail'
        />
        <input
          className='border-0 border-b-2 border-black px-12 py-4 text-2xl text-black placeholder:text-black focus:outline-none'
          type='text'
          placeholder='Tél'
        />
        <input
          className='border-0 border-b-2 border-black px-12 py-4 text-2xl text-black placeholder:text-black focus:outline-none'
          type='text'
          placeholder='Détaillez-nous votre projet..'
        />
        <div className='mt-8 flex items-center justify-center'>
          <button className='rounded-[calc(5rem/8)] bg-dark-light px-3 py-2 text-xl text-white'>
            Envoyer
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactSectionForm;
