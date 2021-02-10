import React from "react";
import SavedBooksCard from "../SavedBooksCard";


function SavedBooksList({ books }) {
  return books.map((book) => (
    <SavedBooksCard
      key={book.id}
      title={book.volumeInfo.title}
      authors={book.book.volumeInfo.authors}
      image={book.volumeInfo.imageLinks    book.volumeInfo.imageLinks.thumbnail :}
      description={book.volumeInfo.description}
      link={book.volumeInfo.previewLink}
      deletBook={}
    />
  ));
}

export default SavedBooksList;