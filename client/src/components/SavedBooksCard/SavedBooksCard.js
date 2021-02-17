import React from "react";
import { Button } from "reactstrap";

function SavedBooksCard(props) {
  const { image, title, description, authors, link, deleteBook } = props;
  console.log(image);
  return (
    <div>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <img className="image" src={image} alt="book" />
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>Author(s): {authors.join(", ")}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View Book
          </a>
          <Button onClick={deleteBook}>Delete Book</Button>
        </div>
      </div>
    </div>
  );
}

export default SavedBooksCard;
