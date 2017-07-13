/* jshint esversion:6 */

import React from 'react';
import { update, getAll } from './BooksAPI';

class BookShelfChanger extends React.Component {
  constructor() {
    super();
    this.state = {
      value:''
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
    update(this.props.book, e.target.value);

  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.shelf} onChange={this.handleChange.bind(this)}>
          <option value="none" disabled>Move to...</option>
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
