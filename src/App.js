/* jshint esversion:6 */
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import ListBooks from './list-books';
import SearchPage from './search-page';


class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
      <Route exact path='/search' render={() =>  <SearchPage />} />
      <Route exact path='/' render={() => <ListBooks />} />
      </div>
    );
  }
}
export default BooksApp;
