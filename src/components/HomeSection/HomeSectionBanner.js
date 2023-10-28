import React from "react";
import LinkButton from "../ui/LinkButton";

const HomeBanner = () => {
  return (
    <section className="m-w-[100%] h-[100vh] bg-hero-pattern bg-no-repeat bg-cover bg-center">
      <div className="relative top-[15%] left-[10%] w-[77%]">
        <div className="bg-white  pl-[1rem] pr-[1rem] pt-[0.5rem] pb-[0.5rem] rounded-[calc(5rem/2.8)]">
          <h1 className="text-[3rem] font-bold">
            L'harmonie du Yin et Yang appliquée à votre
            <span className="text-[#9e0168]"> stratégie digitale</span>
          </h1>
        </div>
        <div className="m-w-[100%] mt-[2rem]">
          <LinkButton
            href="/contact"
            className="w-[100%] text-[2rem] font-bold text-white bg-black px-[0.9rem] py-[0.4rem] rounded-[calc(5rem/6.2)]"
            text="Nous contacter"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
