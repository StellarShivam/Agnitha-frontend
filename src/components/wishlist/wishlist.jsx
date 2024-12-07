import React from "react";
import { Outlet } from "react-router-dom";

const wishlist = () => {
  return (
    <>
      <Outlet />

      <h2>My Wishlist Of Books</h2>
    </>
  );
};

export default wishlist;
