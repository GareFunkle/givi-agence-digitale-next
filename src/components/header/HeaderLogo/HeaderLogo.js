"use client";

import React, { useState, useEffect } from "react";

import Logo from "../../../assets/Logo/logo_big_givi.png";
import LogoSmall from "../../../assets/Logo/logo_small_givi.png";
import Link from "next/link";

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
    <Link href="/">
      <img
        className={`${
          changeLogo ? "hidden" : "block"
        } h-50 mr-3  transition-opacity duration-300`}
        src="../../assets/Logo/logo_big_givi.png"
        alt="logo givi"
      />
      <img
        className={`${
          changeLogo ? "block opacity" : "hidden"
        } h-50 mr-3  transition-opacity duration-300`}
        src="../../assets/Logo/logo_small_givi.png"
        alt="logo givi small"
      />
    </Link>
  );
};

export default HeaderLogo;
