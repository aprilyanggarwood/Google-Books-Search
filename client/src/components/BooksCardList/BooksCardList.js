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

// class ResultList extends Component {
//   render() {
//     console.log("Props", this.props.bookState);
//     return this.props.bookState.map((book) => (
//       <ResultListItem
//         key={book.id}
//         id={book.id}
//         title={book.volumeInfo.title}
//         link={book.volumeInfo.previewLink}
//         authors={
//           book.volumeInfo.authors && book.volumeInfo.authors.length > 1
//             ? book.volumeInfo.authors.join(", ")
//             : book.volumeInfo.authors
//         }
//         image={
//           book.volumeInfo.imageLinks
//             ? book.volumeInfo.imageLinks.thumbnail
//             : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"
//         }
//         description={book.volumeInfo.description}
//         saveGoogleBook={this.props.saveGoogleBook}
//       />
//     ));
//   }
// }

// export default ResultList;
