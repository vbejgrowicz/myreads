/* jshint esversion:6 */

import React from 'react';
import { Link } from 'react-router-dom';
import { search } from  './BooksAPI';
import DisplayBook from './DisplayBook';

class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      query:'',
      resultBooks:[]
    };
  }

  handleChange(e) {
    const maxResult = 20;
    this.setState({query: e.target.value});
    search(e.target.value, maxResult).then((resultBooks) => {
      this.setState({resultBooks});

    });
  }

  checkArray() {
    if (Array.isArray(this.state.resultBooks)){
      return(
        <div className="search-books-results">
          <DisplayBook mode="search" books={this.state.resultBooks} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks} />
        </div>
      );
    }
  }

  clearQuery() {
    this.setState({query:''});
    this.setState({resultBooks:[]});
  }

  ifQuery() {
    if (this.state.query !== "") {
      return(
        <button type="button" className="clear-search" aria-label="Clear" onClick={this.clearQuery.bind(this)}>
          <span className="glyphicon glyphicon-remove"></span>
        </button>
      );
    }
  }

  render() {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange.bind(this)}/>
            </div>
            {this.ifQuery()}
          </div>
          {this.checkArray()}
        </div>
    );
  }
}

export default SearchPage;
