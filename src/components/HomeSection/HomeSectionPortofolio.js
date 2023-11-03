import Link from "next/link";
import React from "react";
import PortofolioSectionProjects from "../PortofolioSection/PortofolioSectionProjects";
import HomeSectionPortofolioProjects from "./SectionPortofolio/HomeSectionPortofolioProjects";

const images = [
  {
    category: "Site web",
    src: "/assets/portofolio/1.jpg",
  },
  {
    category: "Site web",
    src: "/assets/portofolio/2.jpg",
  },
  {
    category: "Site web",
    src: "/assets/portofolio/3.jpg",
  },

  {
    category: "Réseaux sociaux",
    src: "/assets/portofolio/4.jpg",
  },
  {
    category: "Réseaux sociaux",
    src: "/assets/portofolio/5.jpg",
  },
  {
    category: "Réseaux sociaux",
    src: "/assets/portofolio/6.jpg",
  },

  {
    category: "Identité visuelle",
    src: "/assets/portofolio/7.jpg",
  },
  {
    category: "Identité visuelle",
    src: "/assets/portofolio/8.jpg",
  },
  {
    category: "Identité visuelle",
    src: "/assets/portofolio/9.jpg",
  },
];

const HomeSectionPortofolio = () => {
  return (
    <div className='flex max-w-full flex-col items-center justify-center bg-dark-light py-12'>
      <HomeSectionPortofolioProjects images={images} />
      <div className='flex items-center justify-center pt-20'>
        <Link
          href='/nos-projets'
          className='group  relative overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-pink bg-transparent px-4  py-2 text-4xl font-bold text-white  shadow-[5px_5px_0px_0px_#ff00aa18]  transition-all duration-300 '
        >
          <span className='absolute inset-0 z-0 -translate-x-full transform bg-pink transition-transform duration-300 group-hover:translate-x-0'></span>
          <span className='z-8 relative'> Découvrir nos projets </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeSectionPortofolio;
