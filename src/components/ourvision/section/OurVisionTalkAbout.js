import React from "react";
import LinkButton from "../../UI/LinkButton";
const OurVisionTalkAbout = () => {
  return (
    <section className="max-w-full h-[40vh] bg-black flex items-center justify-center flex-col">
      <div className="text-white">
        <h2 className="text-[4rem] font-bold mb-4">
          Discutons de votre projet !
        </h2>
        <div className="flex justify-start">
          <LinkButton
            className="bg-white text-[1.3rem] px-[0.6rem] py-[0.3rem] rounded-[calc(5rem/6.2)] text-black font-bold"
            href="/contact"
            text="Nous contacter"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVisionTalkAbout;
