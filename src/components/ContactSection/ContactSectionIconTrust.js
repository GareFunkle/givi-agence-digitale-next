import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const ContactSectionIconTrust = () => {
  return (
    <section className='mb-8 flex max-w-full items-center  justify-center '>
      <div className='flex w-1/3 flex-row  justify-around'>
        <div className='flex flex-col items-center  '>
          <div className='bg-dark mb-9 rounded-full p-3'>
            <FontAwesomeIcon className='text-5xl text-white' icon={faClock} />
          </div>
          <p className='font-bold'>9h00 - 19h30 </p>
          <p className='font-bold'>Du lundi au vendredi</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-dark mb-9 rounded-full p-3'>
            <FontAwesomeIcon
              className='text-5xl text-white'
              icon={faEnvelope}
            />
          </div>
          <p className='font-bold'>givi@gmail.com</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-dark mb-9 rounded-full p-3'>
            <FontAwesomeIcon className='text-5xl text-white' icon={faPhone} />
          </div>
          <p className='font-bold'>+33 6 24 12 04 00</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionIconTrust;
