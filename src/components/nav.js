import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { FiMenu, FiX } from "react-icons/fi";
import navStyles from "./navstyles/nav.module.scss";

const Nav = () => {
  const [isMobile, setMobile] = useState(true);
  const [navState, setNavState] = useState(false);
  const [startPos, setPos] = useState(null);
  const handleResize = () => {
    setMobile(window.innerWidth < 700);
  };
  const handleNavToggle = e => setNavState(!navState);

  const handleNavSwipeClose = e => {
    const diff = Math.abs(startPos - e.changedTouches[0].clientX);
    return e.changedTouches[0].clientX < startPos && diff > 150
      ? handleNavToggle()
      : null;
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const servicesList = (
    <div className={navStyles.services__list}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services/">Services</Link>
        </li>
        <li>
          <Link to="/videos/">Videos</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/resources/">Resources</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
    </div>
  );

  return isMobile ? (
    <nav className={navStyles.nav}>
      <div className={navStyles.mobile__logo}>
        <img
          src="https://res.cloudinary.com/snackmanproductions/image/upload/v1574282613/tutoring-site/logo_transparent_background_ewr81c.png"
          alt="logo"
        ></img>
      </div>
      <div className={navStyles.toggle__box} onClick={e => handleNavToggle(e)}>
        <FiMenu
          style={
            navState
              ? {
                  transform: `rotate(180deg)`,
                  transition: "all .3s ease-in-out"
                }
              : {
                  transform: `rotate(-180deg)`,
                  transition: "all .3s ease-in-out"
                }
          }
        />
      </div>
      <div
        className={
          navState
            ? `${navStyles.sideMenu}`
            : `${navStyles.sideMenu} ${navStyles.sideMenu__hide}`
        }
        onTouchStart={e => setPos(e.touches[0].clientX)}
        onTouchEnd={e => handleNavSwipeClose(e)}
      >
        <div className={navStyles.sideMenu__container}>
          <div
            className={navStyles.close__box}
            onClick={e => handleNavToggle(e)}
          >
            <FiX
              style={
                navState
                  ? {
                      transform: `rotate(180deg)`,
                      transition: "all .3s ease-in-out"
                    }
                  : {
                      transform: `rotate(-180deg)`,
                      transition: "all .3s ease-in-out"
                    }
              }
            />
          </div>
          {servicesList}
        </div>
        <div
          className={navStyles.sideMenu__overlay}
          onClick={e => setNavState(!navState)}
        ></div>
      </div>
    </nav>
  ) : (
    <nav className={navStyles.nav}>
      <div className={navStyles.nav__left}>
        <Link to="/">
          <img
            src={
              "https://res.cloudinary.com/snackmanproductions/image/upload/v1574282613/tutoring-site/logo_transparent_background_ewr81c.png"
            }
            className={navStyles.logo}
            alt="the clerk of oxford company logo"
          />
        </Link>
      </div>
      <div className={navStyles.nav__right}>
        <NavLink exact to="/" activeClassName={navStyles.active}>
          Home
        </NavLink>
        <NavLink exact to="/services" activeClassName={navStyles.active}>
          Services
        </NavLink>
        <NavLink exact to="/videos" activeClassName={navStyles.active}>
          Videos
        </NavLink>
        <NavLink exact to="/about" activeClassName={navStyles.active}>
          About
        </NavLink>
        <NavLink exact to="/resources" activeClassName={navStyles.active}>
          Resources
        </NavLink>
        <NavLink exact to="/contact" activeClassName={navStyles.active}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};
export default Nav;
