/* jshint esversion:6 */
import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class CheckShelf extends React.Component {

  render() {
    const bookOnShelf = this.props.booksOnShelf.find(i => i.id === this.props.book.id);
    return bookOnShelf ? (
      <BookShelfChanger isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} shelf={bookOnShelf.shelf} updateBooks={this.props.updateBooks} />
    ):(
      <BookShelfChanger isLoading={this.props.isLoading} setLoadState={this.props.setLoadState} mode={this.props.mode} book={this.props.book} shelf={'none'} updateBooks={this.props.updateBooks} />
    );
  }
}

export default CheckShelf;
