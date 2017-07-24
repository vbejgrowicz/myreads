/* jshint esversion:6 */
import React from 'react';
import CheckShelf from './CheckShelf';

class DisplayBookTop extends React.Component {

  render() {
    return (
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) + ')' }}></div>
        <CheckShelf setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
      </div>
    );
  }
}

export default DisplayBookTop;
