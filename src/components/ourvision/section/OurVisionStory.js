import React from "react";

const OurVisionStory = () => {
  return (
    <section className="max-w-full auto flex items-center flex-col">
      <div className="flex items-center justify-center mb-[5rem]">
        <img
          className="w-full"
          src="../../assets/Logo/logo_big_givi.png"
          alt="logo givi agence digitale"
        />
      </div>

      <div className="flex items-start justify-start flex-col w-[70%]">
        <h1 className="text-[3rem] font-bold mb-[1.5rem]">Notre histoire</h1>
        <p className="text-[1.5rem] mb-4">
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu'un simple outil : il est le terrain sur lequel les rêves prennent
          forme et les idées s'épanouissent.
        </p>
        <p className="text-[1.5rem] mb-4">
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <p className="text-[1.5rem] mb-4">
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d'assurer que votre voix soit entendue dans cette vaste
          mer d'innovations.
        </p>
        <p className="text-[1.5rem] mb-4">
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
      </div>
    </section>
  );
};

export default OurVisionStory;
