import React from "react";
import PortofolioSectionProjects from "../PortofolioSection/PortofolioSectionProjects";
import HomeSectionPortofolioProjects from "./SectionPortofolio/HomeSectionPortofolioProjects";
import LinkButton from "../ui/button/LinkButton";

const images = [
  {
    category: "Site web",
    src: "/portofolio/agence-communication-conception-site-web-shooting-photo-nice-cannes-city-weed-cbd.jpg",
  },
  {
    category: "Site web",
    src: "/portofolio/agence-communication-conception-site-internet-Biot-Cannes-Nice-excellium nutrition.jpg",
  },
  {
    category: "Site web",
    src: "/portofolio/agence-digitale-community-management-cannes-Legends-transformation.jpg",
  },

  {
    category: "Réseaux sociaux",
    src: "/portofolio/agence-digitale-community-management-Nice-antibes-cannes-univers-terrasses-bois.jpg",
  },
  {
    category: "Réseaux sociaux",
    src: "/portofolio/agence-digitale-community-management-relation-pressse-cannes-monaco-paris-parerga.jpg",
  },
  {
    category: "Réseaux sociaux",
    src: "/portofolio/agence-digitale-conception-site-e-commerce--mougin-impact-cbd-shop.jpg",
  },

  {
    category: "Identité visuelle",
    src: "/home/gallery/agence-digitale-nice-conception-site-web-e-commerce.jpg",
  },
  {
    category: "Identité visuelle",
    src: "/portofolio/8.jpg",
  },
  {
    category: "Identité visuelle",
    src: "/home/gallery/agence-digital-cannes-conception-site-internet.jpg",
  },
];

const HomeSectionPortofolio = () => {
  return (
    <div className='bg-dark flex max-w-full flex-col items-center justify-center py-12'>
      <HomeSectionPortofolioProjects images={images} />
      <div className='flex items-center justify-center pt-20'>
        <LinkButton href='/nos-projets'>Découvrir nos projets</LinkButton>
      </div>
    </div>
  );
};

export default HomeSectionPortofolio;
