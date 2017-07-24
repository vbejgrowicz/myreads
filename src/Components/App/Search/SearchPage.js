/* jshint esversion:6 */
import React from 'react';
import { Link } from 'react-router-dom';
import { search } from  '../../../API/BooksAPI';
import SearchResults from './SearchResults';
import ClearQueryButton from './ClearQueryButton';
import LoadingCheck from '../LoadingCheck';

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
    this.setState({query: e.target.value},this.searchBooks);
  }

  searchBooks() {
    search(this.state.query, 20).then((resultBooks) => {
      this.setState({resultBooks});
      this.setState({isLoading: false});
    });
  }

  clearQuery() {
    this.setState({query:''});
    this.setState({resultBooks:[]});
  }

  render() {
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.handleChange.bind(this)}/>
            </div>
            <ClearQueryButton query={this.state.query} onClick={this.clearQuery.bind(this)}/>
          </div>
          <LoadingCheck isLoading={this.state.isLoading} />
          <SearchResults setLoadState={this.props.setLoadState} isLoading={this.state.isLoading || this.props.isLoading} books={this.state.resultBooks} booksOnShelf={this.props.booksOnShelf} updateBooks={this.props.updateBooks}/>
        </div>
    );
  }
}

export default SearchPage;
