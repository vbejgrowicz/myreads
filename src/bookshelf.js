/* jshint esversion:6 */

import React from 'react';
import DisplayBook from './book';
import { getAll } from './BooksAPI';

class Bookshelf extends React.Component {

  constructor() {
    super();
    this.state = {
      books:[]
    };
  }

  componentDidMount() {
  getAll().then((books) => {
    this.setState({books});
  });
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.display}</h2>
        <div className="bookshelf-books">
          <DisplayBook shelf={this.props.shelf} displayBooks={this.state.books.filter(book => (book.shelf === this.props.shelf))} />
        </div>
      </div>
    );
  }
}

export default Bookshelf;
