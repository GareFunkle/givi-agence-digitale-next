import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import LinkButton from "../ui/button/LinkButton";

const itemsService = [
  {
    id: 1,
    title: "Stratégie digitale",
    text: "Ensemble, établissons une stratégie digitale pertinente pour optimiser votre ROI. Chaque canal a ses spécificités, identifions la meilleure approche pour votre secteur.",
  },
  {
    id: 2,
    title: "Community management",
    text: "Dans le paysage dynamique des médias sociaux, une gestion efficace de votre communauté est essentielle. Sur des plateformes comme Instagram, TikTok, et LinkedIn, notre équipe veillera à engager fidèlement vos audiences.",
  },
  {
    id: 3,
    title: "Création de contenu",
    text: "Le contenu visuel est souvent le premier point de contact avec votre audience. Nous nous assurons de produire du contenu de haute qualité, photo ou vidéo, pour établir une impression durable et positive auprès de vos prospects.",
  },
  {
    id: 4,
    title: "Site web et application",
    text: "Votre présence en ligne est votre principal outil de communication. Nous concevons et optimisons des sites web et applications pour répondre aux besoins spécifiques de votre audience tout en mettant en avant l'essence de votre marque.",
  },
  {
    id: 5,
    title: "Rédaction",
    text: "Les mots ont un pouvoir. Qu'il s'agisse d'emails, d'articles de blog ou de fiches produits, ajustons votre ton et contenu pour séduire et informer votre audience.",
  },
  {
    id: 6,
    title: "Référencement naturel (SEO)",
    text: "Augmentez la visibilité de votre site avec une stratégie SEO efficace. Définissons ensemble les mots-clés cibles, et laissez-nous optimiser votre contenu pour les moteurs de recherche.",
  },
];
const HomeOurServices = () => {
  return (
    <section className='my-12 h-auto max-w-[100%]'>
      <div className='flex items-center justify-center'>
        <h1 className='text-title-big font-bold sm:text-5xl md:text-6xl'>
          Nos Services
        </h1>
      </div>
      <div className='grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-8 md:grid-cols-3 md:p-[4rem]'>
        {itemsService.map((item) => (
          <div
            key={item.id}
            className='p-4 text-xl sm:p-8 sm:text-2xl md:p-[20px] md:text-[2rem]'
          >
            <div>
              <div className=' mb-4  flex items-center '>
                <FontAwesomeIcon
                  className=' pr-4 text-[0.5rem] text-pink'
                  icon={faCircle}
                />
                <h3 className='text-xl font-bold  text-pink sm:text-[1.5rem]'>
                  {item.title}
                </h3>
              </div>
              <p className='text-lg font-[500] sm:text-xl md:text-[1.3rem]'>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center'>
        <LinkButton href='/notre-vision'> En savoir plus</LinkButton>
      </div>
    </section>
  );
};

export default HomeOurServices;
