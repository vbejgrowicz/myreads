/* jshint esversion:6 */
import React from 'react';
import DisplayBookTop from './DisplayBookTop';
import DisplayBookTitle from './DisplayBookTitle';
import DisplayBookAuthors from './DisplayBookAuthors';

class DisplayBook extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book, idx) => {
          return (
            <li key={book.id + idx}>
              <div className="book">
                <DisplayBookTop mode={this.props.mode} book={book} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} searchBooks={this.props.searchBooks} />
                <DisplayBookTitle book={book} />
                <DisplayBookAuthors book={book} />
              </div>
            </li>
          );
        })}
      </ol>
    );
    }
  }

export default DisplayBook;
