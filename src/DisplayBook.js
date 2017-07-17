/* jshint esversion:6 */

import React from 'react';
import BookShelfChanger from './BookShelfChanger';

class DisplayBook extends React.Component {

  checkShelf(book){
    if(this.props.mode === "search"){
      var bookOnShelf = this.props.booksOnShelf.find(i => i.id === book.id);
      if (bookOnShelf) {
        return(<BookShelfChanger book={book} shelf={bookOnShelf.shelf} updateBooks={this.props.updateBooks}/>);
      }
      return(<BookShelfChanger book={book} shelf={"none"} updateBooks={this.props.updateBooks}/>);
    }
    return(<BookShelfChanger book={book} shelf={book.shelf} updateBooks={this.props.updateBooks}/>);
  }

  render() {
    return (
      <ol className="books-grid">
      {this.props.books.map(book => {
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks && book.imageLinks.thumbnail) + ')' }}></div>
                {this.checkShelf(book)}
              </div>
              <div className="book-title">{book.title || " "}</div>
              <div className="book-authors">{book.authors && book.authors.map((author, idx) => {
                return(
                  <div key={idx}>
                    {author}
                  </div>
                );
              })}
              </div>
            </div>
          </li>
        );
      })}
      </ol>
    );
    }
}

export default DisplayBook;
