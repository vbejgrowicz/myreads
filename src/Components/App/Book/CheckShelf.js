/* jshint esversion:6 */
import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class CheckShelf extends React.Component {

  render() {
    const bookOnShelf = this.props.booksOnShelf.find(i => i.id === this.props.book.id);
    return (
      <BookShelfChanger isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} shelf={(bookOnShelf && bookOnShelf.shelf) || 'none'} updateBooks={this.props.updateBooks} />
    );
  }
}

export default CheckShelf;
