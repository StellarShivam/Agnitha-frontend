import React, { useState, useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/4c9173640f064b85899743c6dff973a5.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AuthContext } from "../../context/userContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold as needed (e.g., 50px)
      const scrollThreshold = 50;
      const scrolled = window.scrollY > scrollThreshold;
      setIsScrolled(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const handleSignOut = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container navbar-content flex">
          <div className="brand-and-toggler flex flex-sb">
            <Link to="/" className="navbar-brand flex">
              <img src={logoImg} alt="site logo" />
              <span className="text-uppercase fw-7 fs-24 ls-1">BookFinder</span>
            </Link>
            <button
              type="button"
              className="navbar-toggler-btn"
              onClick={handleNavbar}
              aria-label={toggleMenu ? "Close Menu" : "Open Menu"}
              aria-expanded={toggleMenu}
            >
              <HiOutlineMenuAlt3
                size={35}
                style={{
                  color: `${isScrolled || toggleMenu ? "#010101" : "#fff"}`,
                }}
              />
            </button>
          </div>

          <div
            className={
              toggleMenu
                ? "navbar-collapse show-navbar-collapse"
                : "navbar-collapse"
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link text-uppercase ${
                    isScrolled ? "text-black" : "text-white"
                  } fs-22 fw-6 ls-1`}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="about"
                  className={`nav-link text-uppercase ${
                    isScrolled ? "text-black" : "text-white"
                  } fs-22 fw-6 ls-1`}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                {auth.isLoggedIn ? (
                  <Link
                    to="/"
                    className={`nav-link cursor-pointer ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                    onClick={handleSignOut}
                  >
                    SIGN OUT
                  </Link>
                ) : (
                  <Link
                    className={`nav-link ${
                      isScrolled ? "text-black" : "text-white"
                    }`}
                    to="/auth"
                  >
                    SIGN IN
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
