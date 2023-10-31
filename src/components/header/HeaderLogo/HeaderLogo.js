"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  const [changeLogo, setChangeLogo] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setChangeLogo(true);
    } else {
      setChangeLogo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Link href='/'>
      <Image
        width={200}
        height={150}
        className={`${
          changeLogo ? "hidden" : "block"
        } h-50 mr-3  w-auto  transition-opacity duration-300`}
        src='/assets/Logo/logo_big_givi.png'
        alt='logo givi'
      />
      <Image
        width={200}
        height={150}
        className={`${
          changeLogo ? "opacity block" : "hidden"
        } h-50 mr-3 w-auto   transition-opacity duration-300`}
        src='/assets/Logo/logo_small_givi.png'
        alt='logo givi small'
      />
    </Link>
  );
};

export default HeaderLogo;
