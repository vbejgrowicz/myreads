/* jshint esversion:6 */
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { getAll } from './BooksAPI';
import ListBooks from './ListBooks';
import SearchPage from './SearchPage';

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
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/search' render={() =>  <SearchPage booksOnShelf={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />}/>
      <Route exact path='/' render={() => <ListBooks booksOnShelf={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />} />
      </div>
    );
  }
}
export default BooksApp;
