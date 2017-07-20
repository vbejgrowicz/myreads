/* jshint esversion:6 */
import React from 'react';
import DisplayBook from '../Book/DisplayBook';

class SearchResults extends React.Component {

  render() {
    console.log(this.props.books);
    return (this.props.books && this.props.books.length > 0) ? (
      <div className="search-books-results">
        <DisplayBook mode="search" isLoading={this.props.isLoading} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
      </div>
    ):(<div></div>);
  }
}

export default SearchResults;
