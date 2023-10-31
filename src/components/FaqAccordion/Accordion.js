import React from "react";
import AccordionItem from "./AccordionItem";

const itemsFaq = [
  [
    {
      title: "C'est quoi une agence de communication digitale ?",
      text: "Une agence de communication digitale est spécialisée dans la promotion et la communication des marques, produits ou services sur les plateformes numériques. Elle s'occupe de la création de contenu, de la stratégie de médias sociaux, du marketing par e-mail, du SEO, du SEM, et d'autres services liés au monde digital pour assurer une présence en ligne solide et efficace pour ses clients.",
    },
    {
      title: "Notre méthodologie de travail",
      text: "Chez GIVI, nous adoptons une approche collaborative. Tout commence par une phase d'écoute et de découverte où nous cherchons à comprendre vos besoins et objectifs. Ensuite, nous élaborons une stratégie sur mesure, suivie de sa mise en œuvre. À chaque étape, nous nous assurons d'obtenir vos retours et d'ajuster notre approche en conséquence. Nous croyons fermement en une communication transparente et régulière pour garantir le succès de chaque projet.",
    },
    {
      title: "Comment choisir une agence de communication ?",
      text: "Choisir une agence de communication nécessite une évaluation de plusieurs critères : la pertinence de leur portfolio par rapport à vos besoins, leur expertise dans votre secteur, les témoignages de leurs clients, leur capacité à comprendre et à répondre à vos objectifs, et bien sûr, l'adéquation budgétaire. Il est aussi important de choisir une agence avec laquelle vous sentez une connexion et une confiance, car la collaboration sera au cœur du partenariat.",
    },
    {
      title: "Pourquoi travailler avec GIVI ?",
      text: "Travailler avec GIVI, c'est choisir une équipe dévouée, passionnée et experte en communication digitale. Nous offrons un mélange unique d'expertise professionnelle et de chaleur familiale. Chaque projet est traité comme unique, avec une attention personnalisée et une stratégie sur mesure. Notre objectif est de non seulement répondre à vos besoins, mais aussi de surpasser vos attentes et de vous aider à briller dans le monde numérique.",
    },
    {
      title: "Quels services proposez-vous ?",
      text: "Chez GIVI, nous offrons une gamme complète de services de communication, dont la stratégie digitale, la création de contenu, le design graphique, la gestion des médias sociaux, et plus encore.",
    },
    {
      title: "Travaillez-vous avec des entreprises de toutes tailles ?",
      text: "Absolument. Que vous soyez une startup, une PME ou une grande entreprise, notre équipe est prête à répondre à vos besoins en communication.",
    },
  ],

  [
    {
      title: "Combien coûte un projet de communication ?",
      text: "Les coûts varient selon la nature et la complexité du projet. Nous serions ravis de discuter de vos besoins spécifiques et de vous fournir un devis adapté.",
    },
    {
      title: "Quelle est la durée moyenne d'un projet ?",
      text: "La durée d'un projet dépend de sa complexité et de ses exigences. Après une discussion initiale, nous pourrons estimer un calendrier réaliste pour votre projet.",
    },
    {
      title: "Comment garantissez-vous la qualité de votre travail ?",
      text: "Notre équipe se compose de professionnels expérimentés qui sont passionnés par ce qu'ils font. Nous suivons des processus rigoureux et sommes toujours en quête de perfection pour garantir une satisfaction client optimale.",
    },
    {
      title: "Avez-vous des exemples de travaux antérieurs à montrer ?",
      text: "Oui, nous avons un portfolio de projets sur lesquels nous avons travaillé précédemment. N'hésitez pas à nous contacter pour le consulter.",
    },
    {
      title: "Comment la communication se déroule-t-elle pendant le projet ?",
      text: "La communication est essentielle pour nous. Vous aurez un point de contact dédié qui vous tiendra régulièrement informé de l'avancement du projet et sera disponible pour répondre à toutes vos questions.",
    },
    {
      title: "Acceptez-vous les projets en urgence ?",
      text: "Nous comprenons que parfois les délais peuvent être serrés. Selon notre disponibilité et la nature du projet, nous faisons de notre mieux pour répondre aux demandes urgentes.",
    },
  ],
];

const Accordion = () => {
  return (
    <div className='-mx-4 flex flex-wrap'>
      {itemsFaq.map((items, index) => (
        <AccordionItem key={index} items={items} />
      ))}
    </div>
  );
};

export default Accordion;
