/* jshint esversion:6 */

import React from 'react';
import BookShelfChanger from './book-shelf-changer';
import { getAll } from './BooksAPI';

class Book extends React.Component {

constructor() {
  super();
  this.state = {
    books:[]
  };
}

componentDidMount() {
getAll().then((books) => {
  this.setState({books});
});
}

  render() {
    return (
      <ol className="books-grid">
      {this.state.books.filter(book => (book.shelf === this.props.shelf)).map(book => {
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks.thumbnail) + ')' }}></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        );
      })}
      </ol>
    );
    }
}

export default Book;
