"use client";
import React from "react";
import { useForm } from "react-hook-form";

const FormComponent = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='w-full  rounded-3xl bg-white sm:w-1/2 md:w-1/2'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center justify-center px-16 py-8'
      >
        <input
          {...register("nom")}
          className='mx-0 my-4 w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
          type='text'
          placeholder='Nom'
        />
        <input
          {...register("prenom")}
          className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
          type='text'
          placeholder='Prénom'
        />
        <input
          {...register("email")}
          className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
          type='email'
          placeholder='E-mail'
        />
        <input
          {...register("tel")}
          className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
          type='text'
          placeholder='Tél'
        />
        <input
          {...register("projet")}
          className='my-4  w-full border-0 border-b-2 border-black p-2 text-2xl placeholder:text-black  focus:outline-none'
          type='text'
          placeholder='Détaillez-nous votre projet..'
        />
        <button
          className='border-beige  group relative overflow-hidden rounded-[calc(5rem/6.2)] border-2 bg-transparent px-4  py-2 text-2xl font-bold text-black  shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300 '
          type='submit'
        >
          <span className='bg-beige absolute inset-0 z-0 -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0'></span>
          <span className='z-8 relative'> Envoyer </span>
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
