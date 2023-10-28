import React from "react";

const HomeYourIdeas = () => {
  return (
    <section className="max-w-full h-[100vh] bg-black flex items-center justify-center flex-col">
      <h2 className="text-white text-6xl font-bold mb-11">
        Discutons de vos idées
      </h2>
      <div className="w-1/3 bg-white rounded-3xl">
        <form className="flex items-center justify-center flex-col px-16 py-8">
          <input
            className="w-full mx-0 my-4 border-0 border-b-2 border-black text-2xl p-2 placeholder:text-black  focus:outline-none"
            type="text"
            placeholder="Nom"
          />
          <input
            className="w-full  my-4 border-0 border-b-2 border-black text-2xl p-2 placeholder:text-black  focus:outline-none"
            type="text"
            placeholder="Prénom"
          />
          <input
            className="w-full  my-4 border-0 border-b-2 border-black text-2xl p-2 placeholder:text-black  focus:outline-none"
            type="mail"
            placeholder="E-mail"
          />
          <input
            className="w-full  my-4 border-0 border-b-2 border-black text-2xl p-2 placeholder:text-black  focus:outline-none"
            type="text"
            placeholder="Tél"
          />
          <input
            className="w-full  my-4 border-0 border-b-2 border-black text-2xl p-2 placeholder:text-black  focus:outline-none"
            type="text"
            placeholder="Détaillez-nous votre projet.."
          />
          <button
            className="my-8 text-2xl text-white font-bold bg-black px-2.5 py-1 rounded-[calc(5rem/8)] "
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default HomeYourIdeas;
