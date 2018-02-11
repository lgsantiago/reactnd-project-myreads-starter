import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'
import './App.css'

class SearchBooks extends Component {
  static propTypes = {
    booksInShelf: PropTypes.array.isRequired
  }

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    if (query.length > 0) {
      this.setState({ query: query.trim() })
      BooksAPI.search(query).then((books) => {
        this.setState({ books })
      })
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { booksInShelf } = this.props
    const { query, books } = this.state

    let showingBooks
    let showingBooksByAuthor
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      if(books.length > 0)
        showingBooks = books.filter((book) => match.test(book.title))
        showingBooksByAuthor = books.authors.filter((author) => match.test(book.title))
    } else {
      showingBooks = books
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" href='/'>Close</a>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {typeof showingBooks !== 'undefined' && (
              <Book books={showingBooks}/>
            )}
          </ol>
        </div>
      </div>
  )
  }

}

export default SearchBooks
