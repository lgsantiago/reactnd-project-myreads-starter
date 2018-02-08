import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    ckey: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { category, ckey, books } = this.props
    let categorizedBooks

    categorizedBooks = books.filter((book) => (
      book.shelf === ckey
    ))

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
            <Book books={categorizedBooks}/>
        </div>
      </div>
    )
  }
}

export default Bookshelf
