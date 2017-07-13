/* jshint esversion:6 */

import React from 'react';
import BookShelfChanger from './book-shelf-changer';

// import SearchPage from './search-page';

class DisplayBook extends React.Component {

  render() {

    return (
      <ol className="books-grid">
      {this.props.displayBooks.map(book => {
        return(
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + (book.imageLinks.thumbnail) + ')' }}></div>
                <BookShelfChanger />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors && book.authors.map(author => {
                return(
                  <div>
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
