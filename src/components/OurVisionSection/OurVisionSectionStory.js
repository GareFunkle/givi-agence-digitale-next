import Image from "next/image";
import React from "react";

const OurVisionStory = () => {
  return (
    <section className='auto flex max-w-full flex-col items-center'>
      <div className='mb-[5rem] flex items-center justify-center'>
        <Image
          width={800}
          height={500}
          className='w-full'
          src='/assets/Logo/logo_big_givi.png'
          alt='logo givi agence digitale'
        />
      </div>

      <div className='flex w-[70%] flex-col items-start justify-start'>
        <h1 className='mb-[1.5rem] text-[3rem] font-bold'>Notre histoire</h1>
        <p className='mb-4 text-[1.5rem]'>
          Dans un monde en constante évolution, le digital est devenu bien plus
          qu&#39;un simple outil : il est le terrain sur lequel les rêves
          prennent forme et les idées s&#39;épanouissent.
        </p>
        <p className='mb-4 text-[1.5rem]'>
          Chez GIVI notre vision est claire : vous guider et vous accompagner
          dans cet univers.
        </p>
        <p className='mb-4 text-[1.5rem]'>
          Notre objectif principal est de vous aider à naviguer avec confiance
          dans ce monde numérique, de transformer vos ambitions en réalités
          tangibles et d&#39;assurer que votre voix soit entendue dans cette
          vaste mer d&#39;innovations.
        </p>
        <p className='mb-4 text-[1.5rem]'>
          Ensemble, explorons les opportunités du monde 2.0 et construisons
          votre succès.
        </p>
      </div>
    </section>
  );
};

export default OurVisionStory;
