/* jshint esversion:6 */

import React from 'react';
import { Link } from 'react-router-dom';
import { getAll, search } from  './BooksAPI';
import BookShelfChanger from './book-shelf-changer';
import DisplayBook from './book';

class SearchPage extends React.Component {

  constructor() {
    super();
    this.state = {
      value:'r',
      books:[]
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  //
  componentDidMount() {
  search(this.state.value, 20).then((books) => {
    this.setState({books});
  });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    search(this.state.value, 20).then((books) => {
      this.setState({books});
    });
    console.log("handle change called");
    console.log(event.target.value);
  }

  // checkArray() {
  // if (Array.isArray(this.state.books)) === true {
  //   return(
  //     <DisplayBook displayBooks={this.state.books}/>
  //   );
  // }
  // else {
  //   return;
  // }
  // }


  render() {
    console.log(Array.isArray(this.state.books));
    var validArray = (Array.isArray(this.state.books));

    console.log(this.state.books);
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div className="search-books-results">
            <DisplayBook displayBooks={this.state.books}/>
          </div>
        </div>
    );
  }
}

export default SearchPage;
