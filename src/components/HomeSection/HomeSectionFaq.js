import React from 'react';

const itemsFaq = [
  {
    id: 1,
    title: "C'est quoi une agence de communication digitale ?",
    text: "Une agence de communication digitale est spécialisée dans la promotion et la communication des marques, produits ou services sur les plateformes numériques. Elle s'occupe de la création de contenu, de la stratégie de médias sociaux, du marketing par e-mail, du SEO, du SEM, et d'autres services liés au monde digital pour assurer une présence en ligne solide et efficace pour ses clients.",
  },
  {
    id: 2,
    title: 'Notre méthodologie de travail',
    text: "Chez GIVI, nous adoptons une approche collaborative. Tout commence par une phase d'écoute et de découverte où nous cherchons à comprendre vos besoins et objectifs. Ensuite, nous élaborons une stratégie sur mesure, suivie de sa mise en œuvre. À chaque étape, nous nous assurons d'obtenir vos retours et d'ajuster notre approche en conséquence. Nous croyons fermement en une communication transparente et régulière pour garantir le succès de chaque projet.",
  },
];
const HomeFaq = () => {
  return (
    <section className='mt-[2rem] max-w-full'>
      <div className='flex w-full flex-col  items-center'>
        <div className='mb-[1.5rem]'>
          <h2 className='rounded-[calc(5rem/4)] bg-dark-light  pb-[0.5rem] pl-[1rem] pr-[1rem] pt-[0.5rem] text-[4rem] font-bold text-white'>
            Vos <span className='text-pink'>questions</span> les plus fréquentes
          </h2>
        </div>
        {itemsFaq.map((item) => (
          <div className='flex items-start justify-center  ' key={item.id}>
            <div className='mb-[1rem] mt-[1rem] flex w-[44%] flex-col items-start justify-center'>
              <h3 className='text-[1.8rem] font-bold'>{item.title}</h3>
              <hr className='mb-[1rem]   mt-[1rem] w-[60%] border-2 border-black' />
              <p className='text-[1.1rem] font-[500]'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeFaq;
