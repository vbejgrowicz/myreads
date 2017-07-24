/* jshint esversion:6 */
import React from 'react';
import CheckShelf from './CheckShelf';
import BookShelfChanger from './BookShelfChanger';

class DisplayBookTop extends React.Component {

  render() {
    return (
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) + ')' }}></div>
        {(this.props.mode === 'search') ? (
          <CheckShelf isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
        ) : (
          <BookShelfChanger isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} shelf={this.props.book.shelf} updateBooks={this.props.updateBooks} />
        )}
      </div>
    );
  }
}

export default DisplayBookTop;
