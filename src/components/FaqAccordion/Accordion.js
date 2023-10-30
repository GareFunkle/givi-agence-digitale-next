import React from 'react';
import AccordionItem from './AccordionItem';

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
  {
    id: 3,
    title: 'Comment choisir une agence de communication ?',
    text: "Choisir une agence de communication nécessite une évaluation de plusieurs critères : la pertinence de leur portfolio par rapport à vos besoins, leur expertise dans votre secteur, les témoignages de leurs clients, leur capacité à comprendre et à répondre à vos objectifs, et bien sûr, l'adéquation budgétaire. Il est aussi important de choisir une agence avec laquelle vous sentez une connexion et une confiance, car la collaboration sera au cœur du partenariat.",
  },
  {
    id: 4,
    title: 'Pourquoi travailler avec GIVI ?',
    text: "Travailler avec GIVI, c'est choisir une équipe dévouée, passionnée et experte en communication digitale. Nous offrons un mélange unique d'expertise professionnelle et de chaleur familiale. Chaque projet est traité comme unique, avec une attention personnalisée et une stratégie sur mesure. Notre objectif est de non seulement répondre à vos besoins, mais aussi de surpasser vos attentes et de vous aider à briller dans le monde numérique.",
  },
  {
    id: 5,
    title: 'Quels services proposez-vous ?',
    text: 'Chez GIVI, nous offrons une gamme complète de services de communication, dont la stratégie digitale, la création de contenu, le design graphique, la gestion des médias sociaux, et plus encore.',
  },
  {
    id: 6,
    title: 'Travaillez-vous avec des entreprises de toutes tailles ?',
    text: 'Absolument. Que vous soyez une startup, une PME ou une grande entreprise, notre équipe est prête à répondre à vos besoins en communication.',
  },
  {
    id: 7,
    title: 'Combien coûte un projet de communication ?',
    text: 'Les coûts varient selon la nature et la complexité du projet. Nous serions ravis de discuter de vos besoins spécifiques et de vous fournir un devis adapté.',
  },
  {
    id: 8,
    title: 'Quelle est la durée moyenne d&#39;un projet ?',
    text: "La durée d'un projet dépend de sa complexité et de ses exigences. Après une discussion initiale, nous pourrons estimer un calendrier réaliste pour votre projet.",
  },
  {
    id: 9,
    title: 'Comment garantissez-vous la qualité de votre travail ?',
    text: "Notre équipe se compose de professionnels expérimentés qui sont passionnés par ce qu'ils font. Nous suivons des processus rigoureux et sommes toujours en quête de perfection pour garantir une satisfaction client optimale.",
  },
  {
    id: 10,
    title: 'Avez-vous des exemples de travaux antérieurs à montrer ?',
    text: "Oui, nous avons un portfolio de projets sur lesquels nous avons travaillé précédemment. N'hésitez pas à nous contacter pour le consulter.",
  },
  {
    id: 11,
    title: 'Comment la communication se déroule-t-elle pendant le projet ?',
    text: "La communication est essentielle pour nous. Vous aurez un point de contact dédié qui vous tiendra régulièrement informé de l'avancement du projet et sera disponible pour répondre à toutes vos questions.",
  },
  {
    id: 12,
    title: 'Acceptez-vous les projets en urgence ?',
    text: 'Nous comprenons que parfois les délais peuvent être serrés. Selon notre disponibilité et la nature du projet, nous faisons de notre mieux pour répondre aux demandes urgentes.',
  },
  {
    id: 13,
    title: 'Comment démarrons-nous un projet avec vous ?',
    text: 'Pour commencer, contactez-nous via notre formulaire en ligne, par e-mail ou par téléphone. Un membre de notre équipe vous recontactera rapidement pour discuter de vos besoins.',
  },
];

const Accordion = () => {
  return (
    <section className=' relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto flex items-center justify-center  text-center lg:mb-20'>
              <h2 className='rounded-[calc(5rem/4)] bg-dark-light  pb-[0.5rem] pl-[1rem] pr-[1rem] pt-[0.5rem] text-[4rem] font-bold text-white'>
                Vos <span className='text-pink'>questions</span> les plus
                fréquentes
              </h2>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            {itemsFaq.map((item) => (
              <AccordionItem
                key={item.key}
                header={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg
          width='1440'
          height='886'
          viewBox='0 0 1440 886'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='1308.65'
              y1='1142.58'
              x2='602.827'
              y2='-418.681'
              gradientUnits='userSpaceOnUse'
            >
              <stop stop-color='#3056D3' stop-opacity='0.36' />
              <stop offset='1' stop-color='#F5F2FD' stop-opacity='0' />
              <stop offset='1' stop-color='#F5F2FD' stop-opacity='0.096144' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Accordion;
