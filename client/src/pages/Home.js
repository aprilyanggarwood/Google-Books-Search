import React, { Component } from "react";
import { Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Navbar";
import Jumbotron from "../components/Jumbotron/Jumbotron";
// import { Input, SubmitBtn } from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/BooksCard/BooksCard";

function HomePage() {
  state = {
    books: [],
    search: "",
  };

  const [books, setBooks] = useState({ API });

  searchBooks = () => {};

  saveBook = (currentBook) => {
    console.log("This is the current book", currentBook);
    API.saveBook({
      id: currentBook.id,
      title: currentBook.title,
      authors: currentBook.authors,
      description: currentBook.description,
      image: currentBook.image,
      link: currentBook.link,
    })
      .then((res) => console.log("Successful POST to DB!", res))
      .catch((err) => console.log("this is the error", err));
  };

  //   handleInputChange = (event) => {
  //     const { name, value } = event.target;
  //     this.setState({
  //       [name]: value,
  //     });
  //   };

  //   handleFormSubmit = (event) => {
  //     event.preventDefault();
  //     this.searchBooks();
  //   };

  return (
    <div>
      <Nav />
      <Container fluid>
        <Jumbotron />
        <form>
          <h5>Search for books</h5>
          <Input
            value={search}
            onChange={handleInputChange}
            name="search"
            placeholder=""
          />
          <SubmitBtn onClick={handleFormSubmit} />
        </form>

        <BooksCard></BooksCard>

        <div>
          <hr />
          <p>No results to display</p>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
