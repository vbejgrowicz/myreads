/* jshint esversion:6 */

import React from 'react';
import { Link } from 'react-router-dom';
import { search } from  './BooksAPI';
import DisplayBook from './book';

class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      value:'',
      books:[]
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    search(e.target.value, 20).then((books) => {
      this.setState({books});
    });
  }

  checkArray() {
  if (Array.isArray(this.state.books)){
    return(
      <div className="search-books-results">
        <DisplayBook displayBooks={this.state.books}/>
      </div>
    );
  }
}

  render() {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          {this.checkArray()}
        </div>
    );
  }
}

export default SearchPage;
