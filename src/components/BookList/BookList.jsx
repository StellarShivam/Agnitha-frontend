import React from "react";
import { useGlobalContext } from "../../context/context.";
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";
import { Outlet } from "react-router-dom";
import Home from "../../pages/Home/Home";

const BookList = () => {
  const {
    books,
    loading,
    resultTitle,
    currentPage,
    handleNextPage,
    handlePrevPage,
  } = useGlobalContext();
  console.log(books);
  if (loading) return <Loading />;

  return (
    <>
      <section className="booklist">
        <div className="container">
          <div className="section-title">
            <h2>{resultTitle}</h2>
          </div>
          <div className="booklist-content grid card-2-example-page">
            {books.map((book, index) => {
              return <Book key={index} {...book} />;
            })}
          </div>
        </div>
      </section>

      <div id="pagination-wrapper" class="pagination-wrapper hidden">
        <svg
          className="dots btn--prev"
          onClick={handlePrevPage}
          style={{
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
          id="prev-btn"
          height="96"
          viewBox="0 0 24 24"
          width="96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          <path d="M0-.5h24v24H0z" fill="none" />
        </svg>

        <div class="pagination-container">
          <div class="little-dot  little-dot--first"></div>
          <div class="little-dot">
            <div class="big-dot-container">
              <div class="big-dot"></div>
            </div>
          </div>
          <div class="little-dot  little-dot--last"></div>
        </div>

        <svg
          class="dots btn--next"
          onClick={handleNextPage}
          disabled={books.length < 10}
          id="next-btn"
          height="96"
          viewBox="0 0 24 24"
          width="96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
          <path d="M0-.25h24v24H0z" fill="none" />
        </svg>
      </div>
    </>
  );
};

export default BookList;
