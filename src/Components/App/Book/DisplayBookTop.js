/* jshint esversion:6 */
import React from 'react';
import CheckShelf from './CheckShelf';

class DisplayBookTop extends React.Component {

  render() {
    return (
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (this.props.book.imageLinks && this.props.book.imageLinks.thumbnail) + ')' }}></div>
        <CheckShelf book={this.props.book} mode={this.props.mode} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks}/>
      </div>
    );
  }
}

export default DisplayBookTop;
