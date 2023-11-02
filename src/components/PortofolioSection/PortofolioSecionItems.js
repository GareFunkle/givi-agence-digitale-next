import React from "react";
import CategoryButton from "./ButtonCategoryPortofolio/PortofolioSectionCategoryButton";

const PortofolioSecionItems = (props) => {
  return (
    <div className='mb-16 flex items-start'>
      <div className='flex flex-wrap items-start justify-start border-b-2 border-pink py-4 md:py-8 '>
        {props.category.map((item, index) => (
          <CategoryButton
            isSelected={props.selectedCategory === item.name}
            onSelect={() => props.onCategorySelect(item.name)}
            key={index}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PortofolioSecionItems;
