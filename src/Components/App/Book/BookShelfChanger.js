/* jshint esversion:6 */
import React from 'react';
import { update } from '../../../API/BooksAPI';

class BookShelfChanger extends React.Component {

  handleChange(e) {
    this.props.setLoadState();
    update(this.props.book, e.target.value).then(book => {
      this.props.updateBooks();
    });
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select disabled={this.props.isLoading} value={this.props.shelf} onChange={this.handleChange.bind(this)}>
          <option value=" " disabled={true}>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
