/* jshint esversion:6 */
import React from 'react';
import DisplayBook from '../Book/DisplayBook';
import LoadingSpinner from '../LoadingSpinner';

class SearchResults extends React.Component {

  render() {
    return (this.props.books && this.props.books.length > 0) ? (
      <div className="search-books-results">
        <LoadingSpinner isLoading={this.props.isLoading} />
        <DisplayBook mode="search" isLoading={this.props.isLoading} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} searchBooks={this.props.searchBooks} />
      </div>
    ):(<div></div>);
  }
}

export default SearchResults;
