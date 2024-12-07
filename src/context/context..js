import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("the lost world");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [resultTitle, setResultTitle] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // New state for pagination

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q="${searchTerm}"&maxResults=10&startIndex=` +
          (currentPage - 1) * 10
      );
      const data = await response.json();
      console.log(data);

      if (data) {
        const newBooks = data.items.map((book, index) => {
          const {
            id,
            volumeInfo: {
              title,
              authors = [],
              description,
              previewLink,
              categories = [],
              publishedDate,
              publisher,
              imageLinks,
            },
          } = book;

          return {
            id,
            title,
            authors: authors.length > 0 ? authors.join(", ") : "N/A",
            description: description || "No description available",
            previewLink,
            categories: categories.length > 0 ? categories.join(", ") : "N/A",
            publishedDate: publishedDate || "N/A",
            publisher: publisher || "N/A",
            smallThumbnail: imageLinks?.smallThumbnail || null,
          };
        });
        setBooks(newBooks);

        if (newBooks.length > 1) {
          setResultTitle("Your Search Result");
        } else {
          setResultTitle("No Search Result Found!");
        }
      } else {
        setBooks([]);
        setResultTitle("No Search Result Found!");
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm, currentPage]);

  useEffect(() => {
    fetchBooks();
    // Scroll to top of the page after fetching new books
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
  }, [searchTerm, currentPage, fetchBooks]);

  // Pagination handlers
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    console.log("hello");
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        books,
        setSearchTerm,
        resultTitle,
        setResultTitle,
        currentPage,
        handleNextPage,
        handlePrevPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
