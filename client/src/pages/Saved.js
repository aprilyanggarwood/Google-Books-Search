import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { useParams } from "react-router-dom";

import { Container } from "../components/Grid/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import SavedBooksList from "../components/SavedBooks/SavedBooksList";

function SavedPage() {
  const [savedBook, setSavedBook] = useState([]);
  //   const { id } = useParams();
  // const savedbooks = () => {
  //   API.getBooks()
  //     .then((res) => {
  //       // console.log(savedBook);
  //       setSavedBook({
  //         savedBook: res.data,
  //       });
  //       console.log("This is the res from getBooks", res);
  //     })
  //     .catch((err) => {
  //       console.log("This is the error", err);
  //     });
  // };

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
  useEffect(() => {
    API.getBooks()
      .then((res) => {
        // console.log(savedBook);
        setSavedBook(res.data);
        // setSavedBook({

        //   savedBook: res.data,
        // });
        console.log("savedBook");
        // console.log("This is the res from getBooks", res);
      })
      .catch((err) => {
        console.log("This is the error", err);
      });
  }, []);

  return (
    <div>
      {/* <Container fluid>
        <Jumbotron />
        {savedBook.length ? (
          // <SavedBooksList>savedBook={savedbooks}</SavedBooksList>
          <SavedBooksList books={savedBook} />
        ) : (
          <div>
            <hr />
            <p className="no-data">No Saved Books Yet!</p>
          </div>
        )} */}
      <SavedBooksList books={savedBook} />
      {/* </Container> */}
    </div>
  );
}

export default SavedPage;
