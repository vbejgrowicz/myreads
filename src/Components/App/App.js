/* jshint esversion:6 */
import React from 'react';
import { Route } from 'react-router-dom';
import '../../Style/App.css';
import { getAll } from '../../API/BooksAPI';
import ListShelves from './Shelves/ListShelves';
import SearchPage from './Search/SearchPage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      booksOnShelf: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.updateBooks();
  }

  updateBooks(){
    getAll().then((booksOnShelf) => {
      this.setState({ booksOnShelf, isLoading: false });
    });
  }

  setLoadState() {
    this.setState({isLoading: true});
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() =>  <SearchPage setLoadState={this.setLoadState.bind(this)} isLoading={this.state.isLoading} booksOnShelf={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />} />
        <Route exact path='/' render={() => <ListShelves setLoadState={this.setLoadState.bind(this)} isLoading={this.state.isLoading} booksOnShelf={this.state.booksOnShelf} updateBooks={this.updateBooks.bind(this)} />} />
      </div>
    );
  }
}

export default App;
