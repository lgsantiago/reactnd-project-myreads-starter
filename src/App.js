import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
//import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    categories: [
     {key:'currentlyReading',value:'Currently Reading'},
     {key:'wantToRead',value:'Want to Read'},
     {key:'read',value:'Read'}
   ]
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            categories={this.state.categories}
          />
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )}/>
        <div className="open-search">
          <a href='/search'>Add a book</a>
        </div>
      </div>
    )
  }
}

export default BooksApp
