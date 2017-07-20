/* jshint esversion:6 */
import React from 'react';

class DisplayBookAuthors extends React.Component {

  render() {
    return(
      <div className="book-authors">{this.props.book.authors && this.props.book.authors.map((author, idx) => {
        return(
          <div key={idx}>{author}</div>
        );
      })}
      </div>
    );
  }
}

export default DisplayBookAuthors;
