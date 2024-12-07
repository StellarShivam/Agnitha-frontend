// src/context/WishlistContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/api/wishlist/allBooks`
        );
        setWishlist(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  const addToWishlist = async (book) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      await axios.post(
        "http://localhost:3002/api/wishlist/addToWishlist",
        { book },
        config
      );
      setWishlist([...wishlist, book]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (bookId) => {
    try {
      await axios.delete(
        "http://localhost:3002/api/wishlist/removeFromWishlist",
        { bookId }
      );
      setWishlist(wishlist.filter((id) => id !== bookId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, loading, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
