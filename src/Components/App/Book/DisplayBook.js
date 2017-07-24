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
            <li className="full-book" key={book.id + idx} style={this.props.isLoading ? { opacity: '0.2' } : {}}>
              <div className="book">
                <DisplayBookTop isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={book} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
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
