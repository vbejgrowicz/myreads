/* jshint esversion:6 */
import React from 'react';
import DisplayBookTop from './DisplayBookTop';
import DisplayBookTitle from './DisplayBookTitle';
import DisplayBookAuthors from './DisplayBookAuthors';

class DisplayBook extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => {
          return (
            <li key={book.id}>
              <div className="book">
                <DisplayBookTop  book={book} mode={this.props.mode} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
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
