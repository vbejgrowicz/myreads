/* jshint esversion:6 */

import React from 'react';
import Title from './Title';
import Bookshelf from './Bookshelf';
import AddBook from './AddBook';

class ListBooks extends React.Component {

  render() {
    return (
      <div className="list-books">
        <Title />
        <div className="list-books-content">
          <Bookshelf display="Currently Reading "shelf="currentlyReading" books={this.props.booksOnShelf} updateBooks={this.props.updateBooks}/>
          <Bookshelf display="Want to Read" shelf="wantToRead" books={this.props.booksOnShelf} updateBooks={this.props.updateBooks}/>
          <Bookshelf display="Read" shelf="read" books={this.props.booksOnShelf} updateBooks={this.props.updateBooks}/>
        </div>
        <AddBook />
        </div>
      );
    }
  }

export default ListBooks;
