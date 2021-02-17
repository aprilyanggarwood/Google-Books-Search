import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { useParams } from "react-router-dom";

import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SavedBooksList from "../components/SavedBooks/SavedBooksList";
// import BooksCard from "../components/BooksCard/BooksCard";
// import BooksCardList from "../components/BooksCardList/BooksCardList";

function SavedPage() {
  const [savedBook, setSavedBook] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then((res) => {
        setSavedBook(res.data);
        console.log("savedBook");
        // console.log("This is the res from getBooks", res);
      })
      .catch((err) => {
        console.log("This is the error", err);
      });
  }, [savedBook]);

  return (
    <div>
      <Container fluid>
        <Jumbotron />
        {savedBook.length ? (
          <SavedBooksList books={savedBook} setSavedBook={setSavedBook} />
        ) : (
          <div>
            <hr />
            <p className="no-data">No Saved Books Yet!</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SavedPage;

//   const deleteBook = (currentBook, data) => {
//     const bookObj = {
//       title: currentBook.volumeInfo.title,
//       authors: currentBook.volumeInfo.authors || [],
//       description: currentBook.volumeInfo.description,
//       image: currentBook.volumeInfo.imageLinks?.thumbnail || "",
//       link: currentBook.volumeInfo.previewLink,
//     };
//     API.deleteBook(bookObj)
//       .include(data._id)
//       .then((data) => {
//         //   getBooks();
//         console.log("deleted!");
//       });
//   };
