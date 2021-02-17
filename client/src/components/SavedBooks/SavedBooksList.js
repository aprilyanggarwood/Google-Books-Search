import React from "react";
import SavedBooksCard from "../SavedBooksCard/SavedBooksCard";
import API from "../../utils/API";

function SavedBooksList({ books, setSavedBook }) {
  console.log(books);
  const deleteBook = (currentBookID) => {
    // const bookObj = {
    //   title: currentBook.volumeInfo.title,
    //   authors: currentBook.volumeInfo.authors || [],
    //   description: currentBook.volumeInfo.description,
    //   image: currentBook.volumeInfo.imageLinks?.thumbnail || "",
    //   link: currentBook.volumeInfo.previewLink,
    // };

    API.deleteBook(currentBookID).then((data) => {
      console.log("deleted!");
      API.getBooks()
        .then((res) => {
          setSavedBook(res.data);
          console.log("savedBook");
          // console.log("This is the res from getBooks", res);
        })
        .catch((err) => {
          console.log("This is the error", err);
        });
    });
  };

  return books.map((book) => (
    <SavedBooksCard
      title={book.title}
      authors={book.authors}
      image={book.image}
      description={book.description}
      link={book.link}
      deleteBook={() => deleteBook(book._id)}
    />
  ));
}

export default SavedBooksList;
