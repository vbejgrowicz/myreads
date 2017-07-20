/* jshint esversion:6 */
import React from 'react';
import DisplayBook from '../Book/DisplayBook';
import LoadingSpinner from '../LoadingSpinner';

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.display}</h2>
        <div className="bookshelf-books">
          <LoadingSpinner isLoading={this.props.isLoading} />
          <DisplayBook mode="bookshelf" books={this.props.books.filter(book => (book.shelf === this.props.shelf))} updateBooks={this.props.updateBooks} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
