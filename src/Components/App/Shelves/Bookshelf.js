/* jshint esversion:6 */
import React from 'react';
import BookLoadingCheck from '../BookLoadingCheck';

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.display}</h2>
        <div className="bookshelf-books">
          <BookLoadingCheck isLoading={this.props.isLoading} mode="bookshelf" books={this.props.books.filter(book => (book.shelf === this.props.shelf))} updateBooks={this.props.updateBooks} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
