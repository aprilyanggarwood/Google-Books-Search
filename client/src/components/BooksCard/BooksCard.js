import React from "react";

function BooksCard(props) {
  const { image, title, description, authors, link, saveBook } = props;

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
            className="btn btn-success save-btn"
            onClick={() => saveBook(book)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default BooksCard;

{
  /* <div>
  <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
      <img src={this.props.image} style={{ maxWidth: "100px" }} alt="book" />
      <h5 className="card-title" style={{ margin: "10px 0" }}>
        {this.props.title}
      </h5>
      <p className="card-text">{this.props.description}</p>
      <p style={{ fontStyle: "italic" }}>Author(s): {this.props.authors}</p>
      <a
        href={this.props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        style={{ marginRight: "6px" }}
      >
        View Book
      </a>
      <button
        onClick={this.onClickFunc}
        style={{
          backgroundColor: this.state.bgColor,
          color: this.state.color,
        }}
        className="btn"
      >
        {this.state.text}
      </button>
    </div>
  </div>
</div>; */
}
