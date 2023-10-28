import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='relative bottom-0 mt-[10rem] flex max-w-full flex-col items-center justify-center  '>
      <h2 className='text-[2.5rem] font-bold'>Restons en contact</h2>
      <div className='mb-[1.5rem] flex  w-[35%] items-start justify-start'>
        <p className='px-[6rem] text-[1.1rem] text-black'>
          Inscrivez-vous à notre newsletter et suivez nos derniers projets et
          toutes nos actualités !
        </p>
      </div>
      <div className='mb-[2rem] flex w-[25%] '>
        <input
          className='w-[100%] rounded-s-lg border-[2px] border-r-0 border-black text-[1.2rem] placeholder:text-black focus:outline-none'
          type='mail'
          placeholder='email*'
        />
        <button className='rounded-[0.2rem] border-none bg-black py-[0.1rem] pl-[1rem] pr-[2rem] text-[1.3rem] text-white'>
          s&#39;inscrire
        </button>
      </div>
      <p className='mb-[2rem] text-black'>contact@ave-communication.fr</p>
      <div className='mb-[5rem] flex justify-center'>
        <FontAwesomeIcon
          className='p-[0.2rem] text-[2.5rem]'
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className='p-[0.2rem] text-[2.5rem]'
          icon={faSquareInstagram}
        />
        <FontAwesomeIcon
          className='p-[0.2rem] text-[2.5rem]'
          icon={faSquareFacebook}
        />
      </div>
      <div className='flex flex-row items-center'>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          © 2023 Agence GIVI communication with .
        </p>
        <p className='text-[1.2rem border-r-[1px] border-black pl-[0.3rem] pr-[0.3rem] font-[400]'>
          Tous droits réservés{' '}
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
