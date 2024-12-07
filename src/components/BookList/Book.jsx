import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

const Book = ({
  id,
  title,
  authors,
  description,
  previewLink,
  categories,
  publishedDate,
  publisher,
  smallThumbnail,
}) => {
  return (
    <div className="card-2">
      <img
        src={
          smallThumbnail || "https://via.placeholder.com/200x300?text=No+Image"
        }
      />
      <div>
        <Link to={`/book/${id}`}>
          <h2>{title}</h2>
        </Link>
        <h3>By: {authors}</h3>
        <p>Published By: {publisher}</p>
        <div className="buttons">
          <a href={previewLink}>
            <button>See this Book</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Book;
