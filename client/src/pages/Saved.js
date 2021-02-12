import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav/Navbar";
import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SavedBooksCard from "../components/SavedBooksCard/SavedBooksCard";

// import { Input, SubmitBtn } from "../components/Search/Search";

// import { NotFound } from "@reach/router";

function SavedPage(props) {
  const [savedBooks, setSavedBooks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks(id)
      .then((res) => setSavedBooks(res.data.id))
      .catch((err) => console.log(err));
  }

  function deleteBook(props) {
    API.deleteBook(props.id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  // const NotFound = () => <div>Sorry, no results to display</div>;

  return (
    <div>
      <Nav />
      <Container fluid>
        <Jumbotron />

        <SavedBooksCard>
          <button
            className="btn btn-danger delete-btn"
            onClick={() => deleteBook(props.id)}
          >
            Delete
          </button>
        </SavedBooksCard>

        {/* <NotFound default /> */}
      </Container>
    </div>
  );
}

export default SavedPage;
