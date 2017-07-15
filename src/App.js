/* jshint esversion:6 */
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { getAll } from './BooksAPI';
import ListBooks from './list-books';
import SearchPage from './search-page';

class BooksApp extends React.Component {

  constructor() {
    super();
    this.state = {
      booksOnShelf:[]
    };
  }

  componentDidMount() {
  getAll().then((booksOnShelf) => {
    this.setState({booksOnShelf});
  });
  }

  updateBooks(book) {
  getAll().then((booksOnShelf) => {
    this.setState({booksOnShelf});
  });
  // var shelfBook = this.state.booksOnShelf.find(newBook => newBook.id === book.id);
  // if (shelfBook) {
  //   var filteredBooks = this.state.booksOnShelf.filter(newBook => newBook.id !== book.id);
  //   this.setState({booksOnShelf: filteredBooks.concat([book])});
  // }
  // else {
  //   this.setState({booksOnShelf: this.state.booksOnShelf.concat([book])});
  // }
  }


  render() {
    return (
      <div className="app">
      <Route exact path='/search' render={() =>  <SearchPage books={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />}/>
      <Route exact path='/' render={() => <ListBooks books={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />} />
      </div>
    );
  }
}
export default BooksApp;
