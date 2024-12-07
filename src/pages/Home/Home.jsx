import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import BookList from "../../components/BookList/BookList";
import BookDetails from "../../components/BookDetails/BookDetails";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Home;
