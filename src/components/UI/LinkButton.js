'use-client';
import React from 'react';
import Link from 'next/link';

const Button = (props) => {
  return (
    <Link href={props.href} className={props.className}>
      {props.text}
    </Link>
  );
};

export default Button;
