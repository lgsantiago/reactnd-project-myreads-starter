import React from 'react'
//import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [
      {
        name: "Enders Game",
        shelf: "Read"
      }
    ],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <ListBooks
            books={this.state.books}
          />
        )}
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
