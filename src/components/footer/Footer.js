import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSquareFacebook,
  faLinkedin,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative mt-[10rem] bottom-0 flex items-center justify-center flex-col max-w-full ">
      <h2 className="text-[2.5rem] font-bold">Restons en contact</h2>
      <div className="flex items-start  justify-start w-[35%] mb-[1.5rem]">
        <p className="px-[6rem] text-[1.1rem] text-black">
          Inscrivez-vous à notre newsletter et suivez nos derniers projets et
          toutes nos actualités !
        </p>
      </div>
      <div className="mb-[2rem] flex w-[25%] ">
        <input
          className="w-[100%] border-[2px] border-black rounded-s-lg border-r-0 placeholder:text-black text-[1.2rem] focus:outline-none"
          type="mail"
          placeholder="email*"
        />
        <button className="bg-black text-white border-none pl-[1rem] pr-[2rem] py-[0.1rem] rounded-[0.2rem] text-[1.3rem]">
          s'inscrire
        </button>
      </div>
      <p className="text-black mb-[2rem]">contact@ave-communication.fr</p>
      <div className="flex justify-center mb-[5rem]">
        <FontAwesomeIcon
          className="text-[2.5rem] p-[0.2rem]"
          icon={faLinkedin}
        />
        <FontAwesomeIcon
          className="text-[2.5rem] p-[0.2rem]"
          icon={faSquareInstagram}
        />
        <FontAwesomeIcon
          className="text-[2.5rem] p-[0.2rem]"
          icon={faSquareFacebook}
        />
      </div>
      <div className="flex items-center flex-row">
        <p className="text-[1.2rem font-[400] pl-[0.3rem] pr-[0.3rem] border-r-[1px] border-black">
          © 2023 Agence GIVI communication with .
        </p>
        <p className="text-[1.2rem font-[400] pl-[0.3rem] pr-[0.3rem] border-r-[1px] border-black">
          Tous droits réservés{" "}
        </p>
        <p className="text-[1.2rem font-[400] pl-[0.3rem] pr-[0.3rem] border-r-[1px] border-black">
          Mentions Légales
        </p>
        <p className="text-[1.2rem font-[400] pl-[0.3rem] pr-[0.3rem] border-r-[1px] border-black">
          Politique de Confidentialité
        </p>
      </div>
    </footer>
  );
};

export default Footer;
