import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";

// const Navbar = () => {
//   const [isNavShowing, setIsNavShowing] = useState(false);

//   return (
//     <nav>
//       <div className="container nav__container">
//         <Link to="/" className="logo">
//           <img src={Logo} alt="logo" />
//         </Link>
//         <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
//           {links.map(({ name, path }, index) => {
//             return (
//               <li key={index}>
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) => (isActive ? "active-nav" : "")}
//                   onClick={() => setIsNavShowing((prev) => !prev)}>{name}</NavLink>
//               </li>
//             );
//           })}
//         </ul>
//         <button
//           className="nav__toggle-btn"
//           onClick={() => setIsNavShowing(prev => !prev )} >
//           {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
//         </button>
//       </div>
//     </nav>
//   );
// };

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={Logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
