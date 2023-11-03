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
        width={150}
        height={150}
        className={`${
          changeLogo ? "logo-transition hidden  " : "logo-transition block"
        }   max-w-1/2  `}
        src='/assets/Logo/logo_big_givi.png'
        alt='logo givi'
      />
      <Image
        width={150}
        height={150}
        className={`${
          changeLogo ? "logo-transition block " : "logo-transition hidden"
        }   max-w-1/2   `}
        src='/assets/Logo/logo_small_givi.png'
        alt='logo givi small'
      />
    </Link>
  );
};

export default HeaderLogo;
