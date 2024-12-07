import React, { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/context.";

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const { id } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const { books, loading } = useGlobalContext();
  const book = books.find((book) => book.id === id);

  if (loading) return <Loading />;

  return (
    <>
      <Outlet />
      <section className="book-details">
        <div className="container">
          <button
            type="button"
            className="flex flex-c back-btn"
            onClick={() => navigate("/book")}
          >
            <FaArrowLeft size={22} />
            <span className="fs-18 fw-6">Go Back</span>
          </button>

          <div className="book-details-content grid">
            <div className="book-details-img">
              <img src={book?.smallThumbnail} alt="cover img" />
            </div>
            <div className="book-details-info">
              <div className="book-details-item title">
                <span className="fw-6 fs-24">{book?.title}</span>
              </div>
              <div className="book-details-item description">
                <span>{book?.description}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Author: </span>
                <span className="text-italic">{book?.authors}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Categories: </span>
                <span className="text-italic">{book?.categories}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Published Date: </span>
                <span>{book?.publishedDate}</span>
              </div>
              <div className="book-details-item">
                <span className="fw-6">Publisher: </span>
                <span>{book?.publisher}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookDetails;
