import Image from "next/image";
import React from "react";

const HomeSectionPortofolioProjects = (props) => {
  return (
    <div className='grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3'>
      {props.images.map((img) => (
        <div className='box-border h-auto w-80' key={img.src}>
          <Image
            width={1000}
            height={1000}
            className='h-auto w-full rounded-lg transition duration-300  hover:scale-110 hover:shadow-2xl'
            src={img.src}
            alt=''
          />
        </div>
      ))}
    </div>
  );
};

export default HomeSectionPortofolioProjects;
