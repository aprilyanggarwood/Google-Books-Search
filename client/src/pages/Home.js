import React, { useState } from "react";
import { Container } from "../components/Grid/Grid";
import { Form } from "reactstrap";
import Nav from "../components/Nav/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SearchForm from "../components/SearchForm/SearchForm";
import BooksCard from "../components/BooksCard/BooksCard";
import BooksCardList from "../components/BooksCardList/BooksCardList";

import API from "../utils/API";

function HomePage() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleFormSubmit = (event) => {
    // When the form is submitted, prevent its default behavior, get books update the books state
    event.preventDefault();
    API.googleBooks(search)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setBooks(res.data.items);
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => console.log(err));
  };
  const saveBook = (currentBook) => {
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.imageLinks,
      link: currentBook.previewLink,
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err));
  };

  return (
    <div>
      <Nav />
      <Container fluid>
        <Jumbotron />
        <h5>Search for books</h5>
        <SearchForm
          search={search}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        ></SearchForm>

        {books.length ? (
          <BooksCardList books={books} />
        ) : (
          <div>
            <hr />
            <p className="no-data">No Books Found</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default HomePage;
