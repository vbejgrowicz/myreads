/* jshint esversion:6 */
import React from 'react';
import { Link } from 'react-router-dom';
import { search } from  '../../../API/BooksAPI';
import SearchResults from './SearchResults';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      query:'',
      isLoading: false
    };
  }

  handleChange(e) {
    this.setState({isLoading: true});
    this.setState({query: e.target.value});
    search(e.target.value, 20).then((resultBooks) => {
      this.setState({resultBooks});
      this.setState({isLoading: false});
    });
  }

  searchBooks() {
    this.setState({isLoading: true});
    search(this.state.query, 20).then((resultBooks) => {
      this.setState({resultBooks});
      this.setState({isLoading: false});
    });
  }


  clearQuery() {
    this.setState({query:''});
    this.setState({resultBooks:[]});
  }

  ifQuery() {
    if (this.state.query !== "") {
      return(
        <button type="button" className="clear-search" aria-label="Clear" onClick={this.clearQuery.bind(this)}>
          <div className="glyphicon glyphicon-remove"></div>
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
          <SearchResults isLoading={this.state.isLoading} books={this.state.resultBooks} booksOnShelf={this.props.booksOnShelf} searchBooks={this.searchBooks.bind(this)} updateBooks={this.props.updateBooks}/>
        </div>
    );
  }
}

export default SearchPage;
