import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookDetails from "./components/BookDetails/BookDetails";
import BookList from "./components/BookList/BookList";
import About from "./pages/About/About";
import Authentication from "./pages/authentication/authentication.component";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="book" element={<BookList />} />
          <Route path="book/:id" element={<BookDetails />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
