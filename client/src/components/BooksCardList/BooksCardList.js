import React from "react";
import BooksCard from "../BooksCard/BooksCard";
import API from "../../utils/API";

function BooksCardList({ books }) {
  const saveBook = (book) => {
    const bookObj = {
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || [],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks?.thumbnail || "",
      link: book.volumeInfo.previewLink,
    };
    API.saveBook(bookObj).then((data) => {
      console.log("saved!");
    });
  };
  return books.map((book) => (
    <BooksCard
      key={book.id}
      title={book.volumeInfo.title}
      authors={book.volumeInfo.authors || []}
      image={book.volumeInfo.imageLinks?.thumbnail}
      description={book.volumeInfo.description}
      link={book.volumeInfo.previewLink}
      saveBook={() => saveBook(book)}
    />
  ));
}

export default BooksCardList;
