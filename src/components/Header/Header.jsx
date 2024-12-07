import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import BookList from "../BookList/BookList";
import { AuthContext } from "../../context/userContext";
import Button from "../button/button.component";

const Header = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className="holder">
        <header className="header">
          <Navbar />
          <div className="header-content flex flex-c text-center text-white">
            <h2 className="header-title text-capitalize">
              Uncover books tailored to your interests!
            </h2>
            <br />
            <p className="header-text fs-18 fw-3">
              Uncover books that match your unique interests and passions!
              Whether you love thrilling mysteries, heartfelt romances, or
              insightful non-fiction, our app helps you find exactly what you're
              looking for. Dive into a world of stories crafted just for you!
            </p>
            {auth.isLoggedIn ? (
              <SearchForm />
            ) : (
              <Link className="nav-link" to="/auth">
                <Button>JOIN To SEARCH</Button>
              </Link>
            )}
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
