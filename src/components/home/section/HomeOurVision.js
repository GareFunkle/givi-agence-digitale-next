import React from "react";

import LinkButton from "../../UI/LinkButton";

const HomeOurVision = () => {
  return (
    <section className="max-w-full h-[100vh] bg-black text-white flex justify-center">
      <div className="flex flex-col justify-center w-[35%] pr-[2rem]">
        <h2 className="text-[4rem] mb-[2rem]">Notre vision</h2>
        <p className="text-[1.5rem]">
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu'un simple outil : il est le terrain sur lequel les rêves prennent
          forme et les idées s'épanouissent.
        </p>
        <br />
        <p className="text-[1.5rem]">
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <br />
        <p className="text-[1.5rem]">
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d'assurer que votre voix soit entendue dans cette vaste
          mer d'innovations.
        </p>
        <br />
        <p className="text-[1.5rem]">
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
        <div className="flex items-center mt-[2rem]">
          <LinkButton
            href="/notre-vision"
            className="bg-white pl-[0.2rem] pr-[0.2rem] pt-[0.7rem] pb-[0.7rem] rounded-[calc(5rem/8)] no-underline text-black text-[1.2rem] font-bold"
            text="en savoir plus"
          />
        </div>
      </div>
      <div className="flex items-center">
        <img
          className="rounded-[2rem]"
          src="../../../assets/Home/OurVision/couple_givi.jpg"
          alt="couple union force "
        />
      </div>
    </section>
  );
};

export default HomeOurVision;
