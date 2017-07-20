/* jshint esversion:6 */
import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class CheckShelf extends React.Component {

  render() {
    if(this.props.mode === "search"){
      var bookOnShelf = this.props.booksOnShelf.find(i => i.id === this.props.book.id);
      if (bookOnShelf) {
        return(<BookShelfChanger book={this.props.book} shelf={bookOnShelf.shelf} updateBooks={this.props.updateBooks}/>);
      }
      return(<BookShelfChanger book={this.props.book} shelf={"none"} updateBooks={this.props.updateBooks}/>);
    }
    return(<BookShelfChanger book={this.props.book} shelf={this.props.book.shelf} updateBooks={this.props.updateBooks}/>);
  }
}

export default CheckShelf;
