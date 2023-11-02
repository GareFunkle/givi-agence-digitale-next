import React from "react";

const CategoryButton = ({ name, onSelect, isSelected }) => {
  return (
    <button
      type='button'
      className={`mr-3 pr-5 text-center text-2xl transition duration-300 ${
        isSelected ? "text-pink" : "hover:text-pink"
      }`}
      onClick={onSelect}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
