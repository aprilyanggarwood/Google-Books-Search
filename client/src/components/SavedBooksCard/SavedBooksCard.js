import React from "react";

function BooksCard(props) {
  const { image, title, description, authors, link, deleteBook } = props;

  return (
    <div>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <img className="image" src={image} alt="book" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>Author(s): {authors}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Book
          </a>
          <button
            className="btn btn-danger delete-btn"
            onClick={() => deleteBook(book)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavedBooksCard;