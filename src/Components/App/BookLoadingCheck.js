/* jshint esversion:6 */
import React from 'react';
import DisplayBook from './Book/DisplayBook';

class BookLoadingCheck extends React.Component {

  render() {
    return this.props.isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
        <DisplayBook mode={this.props.mode} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} searchBooks={this.props.searchBooks} />
      </div>
    ):(<div className="not-loading">
        <DisplayBook mode={this.props.mode} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} searchBooks={this.props.searchBooks} />
      </div>);
  }
}

export default BookLoadingCheck;
