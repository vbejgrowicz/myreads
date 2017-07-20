/* jshint esversion:6 */
import React from 'react';

class DisplayBookTitle extends React.Component {

  render() {
    return (
      <div className="book-title">{this.props.book.title || " "}</div>
    );
  }
}

export default DisplayBookTitle;
