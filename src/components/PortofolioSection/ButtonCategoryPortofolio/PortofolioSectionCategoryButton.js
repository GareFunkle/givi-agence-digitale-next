import React from "react";

const CategoryButton = ({ name, onSelect, isSelected }) => {
  return (
    <button
      type='button'
      className={`mr-3 pb-4 pr-5 text-center text-2xl transition duration-300 md:pb-8 ${
        isSelected ? "text-beige" : "hover:text-beige"
      }`}
      onClick={onSelect}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
