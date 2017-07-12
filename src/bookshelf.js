/* jshint esversion:6 */

import React from 'react';
import Book from './book';

class Bookshelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.display}</h2>
        <div className="bookshelf-books">
          <Book shelf={this.props.shelf}/>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
