import React from "react";
import Link from "next/link";

const LinkButton = (props) => {
  return (
    <Link
      href={props.href}
      className='bg-dark  group relative overflow-hidden rounded-[calc(5rem/6.2)] border-2 border-beige   px-4 py-2 text-4xl font-bold text-white   transition-all duration-300 '
    >
      <span className='absolute inset-0 z-0 -translate-x-full transform bg-beige transition-transform duration-300 group-hover:translate-x-0'></span>
      <span className='z-8 relative'> {props.children} </span>
    </Link>
  );
};

export default LinkButton;
