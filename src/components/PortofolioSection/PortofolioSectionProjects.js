import Image from "next/image";
import React from "react";

const PortofolioSectionProjects = (props) => {
  const filteredImages =
    props.selectedCategory === "Tous les projets"
      ? props.images
      : props.images.filter((img) => img.category === props.selectedCategory);
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-8  transition duration-500 sm:grid-cols-1 md:grid-cols-3'>
      {filteredImages.map((img) => (
        <div key={img.src}>
          <Image
            width={500}
            height={500}
            className='h-auto max-w-full rounded-[3rem] transition duration-300 hover:scale-110 hover:shadow-2xl'
            src={img.src}
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default PortofolioSectionProjects;
