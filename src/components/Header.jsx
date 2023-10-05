import { useState } from "react";

import HamburgerSVG from "../assets/hamburger.svg";
import HamburgerOpenedSVG from "../assets/hamburgerOpen.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-3 py-6 flex justify-between items-center bg-slate-950 w-full">
        {/* THIS SHOULD BE A LOGO  */}
        <div className="bg-slate-600 h-10 w-48 p-2">PLACEHOLDER LOGO</div>

        <div className="sm:hidden hover:cursor-pointer last:mb-0" onClick={toggleMenu}>
          {menuOpen ? (
            <img src={HamburgerOpenedSVG} alt="close menu" />
          ) : (
            <img src={HamburgerSVG} alt="open menu" />
          )}
        </div>

        <DropdownMenu isOpen={menuOpen} />
      </nav>
    </header>
  );
};

const DropdownMenu = ({ isOpen }) => {
  return (
    <div
      style={{ top: isOpen ? "88px" : "-555px" }}
      className="bg-slate-950 w-full pt-8 absolute left-0 sm:static sm:w-1/2 sm:p-0 transition ease delay-[0.3s]"
    >
      <ul className="w-full px-3 last:border-b-0 sm:flex sm:flex-row sm:justify-around sm:items-center">
        <MenuList navLink="#" navName="helo" />
        <MenuList navLink="#" navName="helo" />
        <MenuList navLink="#" navName="helo" />
        <MenuList navLink="#" navName="helo" />
      </ul>
    </div>
  );
};

const MenuList = ({ navLink, navName }) => {
  return (
    <li className="py-3 border-b-2 border-b-slate-600 sm:py-0 sm:border-none sm:inline">
      <a
        className="text-slate-50 border-none w-full block text-lg uppercase sm:inline"
        href={navLink}
      >
        {navName}
      </a>
    </li>
  );
};

export default Header;
