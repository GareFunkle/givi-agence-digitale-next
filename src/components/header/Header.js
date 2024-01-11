import React from "react";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderItems from "./HeaderItems/HeaderItems";

const Header = () => {
  return (
    <nav className=' bg-beige-light fixed left-0 top-0 z-10 w-full border-gray-200'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <HeaderLogo />
        <HeaderItems />
      </div>
    </nav>
  );
};

export default Header;
