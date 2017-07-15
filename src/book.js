/* jshint esversion:6 */

import React from 'react';
import BookShelfChanger from './book-shelf-changer';

class DisplayBook extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  checkShelf(book){
    if(this.props.mode === "search"){
      for(var i=0; i<(this.props.currentShelf.length); i++) {
        if (this.props.currentShelf[i].id === book.id) {
          return(<BookShelfChanger thisBook={book} shelf={this.props.currentShelf[i].shelf} updateBooks={this.props.updateBooks}/>);
        }
      }
      return(<BookShelfChanger thisBook={book} shelf={"none"} updateBooks={this.props.updateBooks}/>);
    }
    return(<BookShelfChanger thisBook={book} shelf={book.shelf} updateBooks={this.props.updateBooks}/>);
  }

  render() {

    return (
      <ol className="books-grid">
      {this.props.displayBooks.map(book => {
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks.thumbnail || " ") + ')' }}></div>
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
