import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='relative bottom-0 mb-8 mt-16 flex max-w-full flex-col items-center justify-center  '>
      <div className='relative mb-4 box-border h-auto w-80 '>
        <h2 className='text-4xl font-bold'>Restons en contact</h2>
        <div className=' flex max-w-full  items-start justify-start'>
          <p className='text-4 w-full  text-black'>
            Inscrivez-vous à notre newsletter et suivez nos derniers projets et
            toutes nos actualités !
          </p>
        </div>
      </div>
      <div className='mb-[2rem] flex w-1/4 '>
        <input
          className='w-[100%] rounded-s-lg border border-r-0 border-black text-[1.2rem] placeholder:text-black focus:outline-none'
          type='mail'
          placeholder='email*'
        />
        <button className='rounded-[0.2rem] border-none bg-dark-light py-[0.1rem] pl-[1rem] pr-[2rem] text-[1.3rem] text-white transition duration-500 hover:bg-pink'>
          s&#39;inscrire
        </button>
      </div>
      <p className='mb-[2rem] text-black'>contact@ave-communication.fr</p>
      <div className='mb-[5rem] flex justify-center'>
        <Link href='#'>
          <FontAwesomeIcon
            className='p-1 text-[2.5rem] transition duration-300 hover:text-pink'
            icon={faLinkedin}
          />
        </Link>
        <Link href='#'>
          <FontAwesomeIcon
            className='p-1 text-[2.5rem] transition duration-300 hover:text-pink'
            icon={faSquareInstagram}
          />
        </Link>
        <Link href='#'>
          <FontAwesomeIcon
            className='p-1 text-[2.5rem]  transition duration-300 hover:text-pink'
            icon={faSquareFacebook}
          />
        </Link>
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          © 2023 Agence GIVI communication with .
        </p>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          Tous droits réservés
        </p>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          Mentions Légales
        </p>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          Politique de Confidentialité
        </p>
      </div>
    </footer>
  );
};

export default Footer;
