import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookshelfChanger from './BookshelfChanger'

class Book extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <div className="book">
              <div className="book-top">
                {(typeof book.imageLinks !== 'undefined' && typeof book.imageLinks.smallThumbnail !== 'undefined') &&
                  (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>)}
                <BookshelfChanger book={book} shelf={book.shelf} />
              </div>
              <div className="book-title">{book.title}</div>
              {typeof book.authors !== 'undefined' && (<div className="book-authors">{book.authors.map((author) => author + " ")}  </div>)}
            </div>
          </li>
        ))}
      </ol>
    )
  }
}

export default Book
