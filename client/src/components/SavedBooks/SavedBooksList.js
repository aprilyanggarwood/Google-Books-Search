import React from "react";
import SavedBooksCard from "../SavedBooksCard/SavedBooksCard";
import API from "../../utils/API";

function SavedBooksList({ books }) {
  console.log(books);
  const deleteBook = (book) => {
    const bookObj = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.thumbnail || "",
      link: book.volumeInfo.previewLink,
    };
    API.deleteBook(bookObj).then((data) => {
      console.log("saved!");
    });
  };

  return books.map((book) => (
    
    <SavedBooksCard
      key={book.id}
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors}
      image={book.volumeInfo.imageLinks?.thumbnail}
      description={book.volumeInfo.description}
      link={book.volumeInfo.previewLink}
      deleteBook={() => deleteBook(book)}
    />
  ));
}

export default SavedBooksList;
