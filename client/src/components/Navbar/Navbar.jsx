import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { useStateContext } from "../../context/ContextProvider";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";

export const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/home"
  },
  {
    id: 2,
    name: "Announcement",
    link: "/announcement"
  },
  {
    id: 3,
    name: "About Us",
    link: "/about"
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contact"
  }
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(
    () => {
      // Update currentPath whenever the URL changes
      setCurrentPath(location.pathname);
    },
    [location.pathname]
  );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { setMode, currentMode } = useStateContext();

  const toggleTheme = () => {
    setMode({
      target: { value: currentMode === "Light" ? "Dark" : "Light" }
    });
  };

  const handleNavLinkClick = link => {
    setCurrentPath(link);
    navigate(link); // Navigate to the clicked link
    setShowMenu(false); // Close the menu after clicking a link
  };

  return (
    <div className="relative z-10 shadow-md justify-between w-full dark:bg-secondary-dark-bg dark:text-gray-200 duration-400">
      <div className="container p-2 md:p-1">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto ">
          <div>
            <span className="font-bold text-sm sm:text-sm xl:text-lg ml-8 xl:ml-24">
              Logo
            </span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) =>
                <li key={id} className="py-4">
                  <NavLink
                    to={link}
                    onClick={() => handleNavLinkClick(link)}
                    className={`text-sm sm:text-base hover:text-primary py-2 hover:border-b-2 hover:border-primary ${currentPath ===
                    link
                      ? "text-primary border-b-2 border-primary"
                      : ""}`}
                  >
                    {name}
                  </NavLink>
                </li>
              )}
              <Link to="/registration">
                <div className="flex items-center cursor-pointer ml-2 lg:ml-28 bg-primary px-4 py-2 rounded-full text-white hover:opacity-80 transition-colors duration-500">
                  Register
                </div>
              </Link>
              {/* DarkMode feature implement */}
              <div
                className={`flex items-center cursor-pointer bg-gray-200 p-2 rounded-xl dark:text-black`}
                onClick={toggleTheme}
              >
                {currentMode === "Dark"
                  ? <FiMoon size={20} />
                  : <FiSun size={20} />}
              </div>
            </ul>
          </nav>
          {/* Mobile view  */}
          <div className="flex items-center gap-4 md:hidden ">
            {/* dark  mode */}
            <div
              className={`flex items-center cursor-pointer bg-gray-200 p-2 rounded-xl dark:text-black`}
              onClick={toggleTheme}
            >
              {currentMode === "Dark"
                ? <FiMoon size={20} />
                : <FiSun size={20} />}
            </div>
            {/* Mobile Hamburger icon */}
            {showMenu
              ? <HiMenuAlt1
                  onClick={toggleMenu}
                  className=" cursor-pointer transition-all"
                  size={20}
                />
              : <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={20}
                />}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
