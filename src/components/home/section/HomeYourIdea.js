import React from "react";

const HomeYourIdeas = () => {
  return (
    <section className="Homeyourideas">
      <h2>Discutons de vos idées</h2>
      <div className="yourideas__form">
        <form>
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="mail" placeholder="E-mail" />
          <input type="text" placeholder="Tél" />
          <input type="text" placeholder="Détaillez-nous votre projet.." />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default HomeYourIdeas;
