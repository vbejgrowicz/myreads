/* jshint esversion:6 */

import React from 'react';
// import { Link } from 'react-router-dom';
import Title from './title';
import Bookshelf from './bookshelf';
import AddBook from './add-book';

class ListBooks extends React.Component {

  render() {
    return (
      <div className="list-books">
        <Title />
        <div className="list-books-content">
          <Bookshelf display="Currently Reading "shelf="currentlyReading" books={this.props.books} updateBooks={this.props.updateBooks}/>
          <Bookshelf display="Want to Read" shelf= "wantToRead" books={this.props.books} updateBooks={this.props.updateBooks}/>
          <Bookshelf display="Read" shelf= "read" books={this.props.books} updateBooks={this.props.updateBooks}/>
        </div>
        <AddBook />
        </div>
      );
    }
  }

export default ListBooks;
