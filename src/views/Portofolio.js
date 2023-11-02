"use client";
import CategoryButton from "@/components/PortofolioSection/ButtonCategoryPortofolio/PortofolioSectionCategoryButton";
import PortofolioSecionItems from "@/components/PortofolioSection/PortofolioSecionItems";
import PortofolioSectionHeader from "@/components/PortofolioSection/PortofolioSectionHeader";
import PortofolioSectionProjects from "@/components/PortofolioSection/PortofolioSectionProjects";
import React, { useState } from "react";

const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous les projets");
  const [categories, setCategories] = useState([
    { name: "Tous les projets" },
    { name: "Site web" },
    { name: "Réseaux sociaux" },
    { name: "Identité visuelle" },
    { name: "Shooting photo" },
  ]);

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

    {
      category: "Shooting photo",
      src: "/assets/portofolio/10.jpg",
    },
    {
      category: "Shooting photo",
      src: "/assets/portofolio/11.jpg",
    },
    {
      category: "Shooting photo",
      src: "/assets/portofolio/12.jpg",
    },
  ];

  return (
    <div className='relative px-16'>
      <PortofolioSectionHeader />
      <div className='px-12'>
        <PortofolioSecionItems
          category={categories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <PortofolioSectionProjects
          images={images}
          selectedCategory={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Portofolio;
