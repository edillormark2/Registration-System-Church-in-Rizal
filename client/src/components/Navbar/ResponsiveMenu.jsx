import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
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

  const handleNavLinkClick = link => {
    setCurrentPath(link);
    navigate(link); // Navigate to the clicked link
    setShowMenu(false); // Close the menu after clicking a link
  };

  return (
    <div
      className={`${showMenu
        ? "left-0"
        : "-left-[100%]"} fixed bottom-0 top-0 z-20 flex h-screen w-[50%] flex-col justify-between bg-white dark:bg-secondary-dark-bg dark:text-gray-200 px-4 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl drop-shadow-2xl`}
    >
      <div className="card">
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Logo</h1>
          </div>
        </div>
        <nav className="mt-12">
          <ul className="space-y-2 text-base">
            {Navlinks.map(({ id, name, link }) =>
              <li
                key={id}
                onClick={() => handleNavLinkClick(link)}
                className={`hover:bg-gray-200 dark:hover:text-black rounded-md cursor-pointer ${currentPath ===
                link
                  ? "bg-gray-200 dark:text-black"
                  : ""}`}
              >
                <NavLink to={link} className="p-3 inline-block">
                  {name}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <Link to="/registration">
          <div
            className="flex justify-center mt-10 cursor-pointer bg-blue-500 px-4 py-2 rounded-full text-white hover:opacity-80"
            onClick={() => setShowMenu(false)} // Close the menu when clicking the "Register" button
          >
            Register
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
