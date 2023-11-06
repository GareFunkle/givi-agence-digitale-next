"use client";
import CategoryButton from "@/components/PortofolioSection/ButtonCategoryPortofolio/PortofolioSectionCategoryButton";
import PortofolioSectionItems from "@/components/PortofolioSection/PortofolioSectionItems";
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
      categories: ["Site web", "Shooting photo"],
      src: "/portofolio/agence-communication-conception-site-web-shooting-photo-nice-cannes-city-weed-cbd.jpg",
    },
    {
      categories: ["Site web", "Shooting photo"],
      src: "/portofolio/agence-communication-conception-site-internet-Biot-Cannes-Nice-excellium nutrition.jpg",
    },
    {
      categories: ["Site web", "Identité visuelle"],
      src: "/portofolio/agence-digitale-conception-site-e-commerce--mougin-impact-cbd-shop.jpg",
    },

    {
      categories: ["Réseaux sociaux"],
      src: "/portofolio/agence-digitale-community-management-cannes-Legends-transformation.jpg",
    },
    {
      categories: ["Réseaux sociaux"],
      src: "/portofolio/agence-digitale-community-management-Nice-antibes-cannes-univers-terrasses-bois.jpg",
    },
    {
      categories: ["Réseaux sociaux", "Identité visuelle"],
      src: "/portofolio/agence-digitale-community-management-relation-pressse-cannes-monaco-paris-parerga.jpg",
    },
  ];

  return (
    <div className='relative px-4 sm:px-8 md:px-16 lg:px-24'>
      <PortofolioSectionHeader />

      <PortofolioSectionItems
        category={categories}
        onCategorySelect={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <PortofolioSectionProjects
        images={images}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Portofolio;
