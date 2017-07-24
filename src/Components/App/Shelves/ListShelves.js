/* jshint esversion:6 */
import React from 'react';
import Title from '../Title';
import Bookshelf from './Bookshelf';
import AddBook from './AddBook';
import LoadingCheck from '../LoadingCheck';

class ListShelves extends React.Component {

  render() {
    return (
      <div className="list-books">
        <Title />
        <div className="list-books-content">
          <LoadingCheck isLoading={this.props.isLoading} />
          <Bookshelf display="Currently Reading "shelf="currentlyReading" setLoadState={this.props.setLoadState} isLoading={this.props.isLoading} books={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
          <Bookshelf display="Want to Read" shelf="wantToRead" setLoadState={this.props.setLoadState} isLoading={this.props.isLoading} books={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
          <Bookshelf display="Read" shelf="read" setLoadState={this.props.setLoadState} isLoading={this.props.isLoading} books={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
        </div>
        <AddBook />
      </div>
    );
  }
}

export default ListShelves;
