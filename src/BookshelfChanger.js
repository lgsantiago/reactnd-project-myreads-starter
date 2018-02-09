import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired
  }

  state = {
    shelfState: ""
  }

  updateShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(book => {
      console.log(book);
    })
  }

  render() {
    const { shelf, book } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={shelf}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
