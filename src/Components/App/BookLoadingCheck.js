/* jshint esversion:6 */
import React from 'react';
import DisplayBook from './Book/DisplayBook';

class BookLoadingCheck extends React.Component {

  render() {
    return this.props.isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
        <DisplayBook isLoading={true} setLoadState={this.props.setLoadState} mode={this.props.mode} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
      </div>
    ):(<div className="not-loading">
        <DisplayBook isLoading={false} setLoadState={this.props.setLoadState} mode={this.props.mode} books={this.props.books} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
      </div>);
  }
}

export default BookLoadingCheck;
