import Image from "next/image";
import React from "react";

const PortofolioSectionProjects = (props) => {
  let filteredImages =
    props.selectedCategory === "Tous les projets"
      ? [...props.images] // Crée une copie de props.images
      : props.images.filter((img) =>
          img.categories.includes(props.selectedCategory)
        );

  if (props.selectedCategory === "Tous les projets") {
    const order = [
      "Site web",
      "Réseaux sociaux",
      "Shooting photo",
      "Identité visuelle",
    ];
    const orderedImages = [];
    let i = 0;
    while (filteredImages.length > 0) {
      const category = order[i % order.length];
      const index = filteredImages.findIndex((img) =>
        img.categories.includes(category)
      );
      if (index !== -1) {
        orderedImages.push(filteredImages[index]);
        filteredImages.splice(index, 1);
      }
      i++;
    }
    filteredImages = orderedImages;
  }
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-8  transition duration-500 sm:grid-cols-1 md:grid-cols-3'>
      {filteredImages.map((img) => (
        <div key={img.src}>
          <Image
            width={500}
            height={500}
            className='h-auto w-auto rounded-[3rem] transition duration-300  hover:shadow-2xl'
            src={img.src}
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default PortofolioSectionProjects;
