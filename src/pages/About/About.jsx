import React from "react";
import "./About.css";
import aboutImg from "../../images/pexels-rickyrecap-1907784.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">About BookFinder</h2>
            <p className="fs-17">
              Book Finder is a powerful and intuitive web application designed
              to provide users with seamless access to a vast collection of
              books using the Google Books API. The app enables users to search
              for books based on titles, authors, or keywords and retrieve
              detailed information, including the book's title, authors,
              description, publication date, categories, publisher, and even
              cover images.
            </p>
            <p className="fs-17">
              A key highlight of Book Finder is its dynamic and responsive
              design, ensuring that users can explore books across devices,
              whether on a desktop, tablet, or mobile. Each search result
              includes a preview link, allowing users to dive deeper into the
              content of the book directly from the Google Books platform. The
              application is perfect for book enthusiasts, researchers, and
              students who need quick access to reliable information about a
              wide variety of books.
            </p>
            <p className="fs-17">
              By leveraging the powerful capabilities of the Google Books API,
              Book Finder streamlines the process of discovering books, whether
              for leisure reading, academic research, or professional purposes.
              Its clean interface, coupled with detailed book information,
              ensures a rich user experience, making it an indispensable tool
              for anyone who loves reading or exploring literature.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
