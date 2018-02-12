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
    else {
      this.setState({ query: '', books: [] })

    }
  }

  render() {
    const { booksInShelf } = this.props
    const { query, books } = this.state

    let showingBooks = []
    let booksInShelfMap = []
    booksInShelf.map((book) =>
      booksInShelfMap[book.id] = book.shelf
    )

    if (query && books.length > 0) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => (match.test(book.title) || (
          typeof book.authors !== 'undefined' && book.authors.map((author) => match.test(author))
        )
      ))

      showingBooks.map((book) =>
        book.shelf = booksInShelfMap[book.id]
      )
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
