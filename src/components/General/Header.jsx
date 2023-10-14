import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import HamburgerSVG from "../../assets/hamburger.svg";
import HamburgerOpenedSVG from "../../assets/hamburgerOpen.svg";

const MenuList = ({ navLink, navName, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <li className="py-3 border-b-2 border-b-slate-600 sm:py-0 sm:border-none sm:inline">
      <NavHashLink
        smooth
        className="text-slate-50 border-none w-full block text-lg uppercase sm:inline relative hover:text-red-400"
        to={navLink}
        onClick={handleClick}
      >
        {navName}
      </NavHashLink>
    </li>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="px-3 py-6 flex justify-between items-center bg-slate-950 w-full">
        {/* THIS SHOULD BE A LOGO  */}
        <div className="bg-slate-600 h-10 w-48 p-2">PLACEHOLDER LOGO</div>

        <div className="md:hidden hover:cursor-pointer last:mb-0" onClick={toggleMenu}>
          {menuOpen ? (
            <img src={HamburgerOpenedSVG} alt="close menu" />
          ) : (
            <img src={HamburgerSVG} alt="open menu" />
          )}
        </div>

        <DropdownMenu isOpen={menuOpen} closeMenu={closeMenu} />
      </nav>
    </header>
  );
};

const DropdownMenu = ({ isOpen, closeMenu }) => {
  return (
    <div
      style={{ top: isOpen ? "88px" : "-555px" }}
      className="bg-slate-950 w-full pt-8 absolute left-0 md:static md:w-2/3 lg:w-1/2 sm:p-0 sm:py-3 transition-all ease duration-500"
    >
      <ul className="w-full px-3 last:border-b-0 sm:flex sm:flex-row sm:justify-around sm:items-center">
        <MenuList navLink="/#top" navName="home" closeMenu={closeMenu} />
        <MenuList navLink="/tutorial" navName="tutorials" closeMenu={closeMenu} />
        <MenuList navLink="/certifications" navName="certifications" closeMenu={closeMenu} />
        <MenuList navLink="/blogs" navName="blogs" closeMenu={closeMenu} />
        <MenuList navLink="/#contact" navName="contact" closeMenu={closeMenu} />
      </ul>
    </div>
  );
};

export default Header;
