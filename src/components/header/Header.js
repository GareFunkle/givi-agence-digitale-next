import React from "react";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderItems from "./HeaderItems/HeaderItems";

const Header = () => {
  return (
    <nav className=" fixed top-0 left-0 w-full bg-white border-gray-200 z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <HeaderLogo />
        <HeaderItems />
      </div>
    </nav>
  );
};

export default Header;
