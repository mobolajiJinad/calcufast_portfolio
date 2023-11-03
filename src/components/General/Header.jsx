import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import HamburgerSVG from "../../assets/hamburger.svg";
import HamburgerOpenedSVG from "../../assets/hamburgerOpen.svg";

const MenuList = ({ navLink, navName, closeMenu }) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <li className="border-b-2 border-b-slate-600 py-3 sm:inline sm:border-none sm:py-0">
      <NavHashLink
        smooth
        className="relative block w-full border-none text-lg uppercase text-slate-50 hover:text-red-400 sm:inline"
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
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-slate-950 px-3 py-6">
        {/* THIS SHOULD BE A LOGO  */}
        <div className="h-10 w-48 bg-slate-600 p-2">PLACEHOLDER LOGO</div>

        <div
          className="last:mb-0 hover:cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
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
      className="ease absolute left-0 w-full bg-slate-950 pt-8 transition-all duration-500 sm:p-0 sm:py-3 md:static md:w-2/3 lg:w-1/2"
    >
      <ul className="w-full px-3 last:border-b-0 sm:flex sm:flex-row sm:items-center sm:justify-around">
        <MenuList navLink="/#top" navName="home" closeMenu={closeMenu} />
        <MenuList
          navLink="/tutorial"
          navName="tutorials"
          closeMenu={closeMenu}
        />
        <MenuList
          navLink="/certifications"
          navName="certifications"
          closeMenu={closeMenu}
        />
        <MenuList navLink="/#contact" navName="contact" closeMenu={closeMenu} />
      </ul>
    </div>
  );
};

export default Header;
