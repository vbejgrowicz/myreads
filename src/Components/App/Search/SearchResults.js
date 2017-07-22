/* jshint esversion:6 */
import React from 'react';
import BookLoadingCheck from '../BookLoadingCheck';

class SearchResults extends React.Component {

  render() {
    return (this.props.books && this.props.books.length > 0) ? (
      <div className="search-books-results">
        <BookLoadingCheck setLoadState={this.props.setLoadState} isLoading={this.props.isLoading} mode="search" books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
      </div>
    ):(<div></div>);
  }
}

export default SearchResults;
