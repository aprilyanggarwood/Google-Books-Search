import React from "react";
import SavedBooksCard from "../SavedBooksCard/SavedBooksCard";
import API from "../../utils/API";

function SavedBooksList({ books }) {
  console.log(books);
  const deleteBook = (currentBook, data) => {
    const bookObj = {
      title: currentBook.volumeInfo.title,
      authors: currentBook.volumeInfo.authors || [],
      description: currentBook.volumeInfo.description,
      image: currentBook.volumeInfo.imageLinks?.thumbnail || "",
      link: currentBook.volumeInfo.previewLink,
    };
    API.deleteBook(bookObj)
      .include(data._id)
      .then((data) => {
        //   getBooks();
        console.log("deleted!");
      });
  };

  return books.map((book) => (
    <SavedBooksCard
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
      image={book.volumeInfo.imageLinks?.thumbnail}
      description={book.volumeInfo.description}
      link={book.volumeInfo.previewLink}
      deleteBook={() => deleteBook()}
    />
  ));
}

export default SavedBooksList;

// const saveBook = (currentBook) => {
//   API.saveBook({
//     id: currentBook.id,
//     title: currentBook.title,
//     authors: currentBook.authors,
//     description: currentBook.description,
//     image: currentBook.imageLinks,
//     link: currentBook.previewLink,
//   })
//     .then((res) => console.log("Successful POST to DB!", res))
//     .catch((err) => console.log("this is the error", err));
// };
