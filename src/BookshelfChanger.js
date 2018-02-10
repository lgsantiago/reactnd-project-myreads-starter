import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends Component {
  state = {
    currentShelf: ""
  }

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.setState({ currentShelf: this.props.shelf })
  }

  updateShelf(book, newShelf) {
    this.setState({ currentShelf: newShelf })

    BooksAPI.update(book, newShelf).then((response) => {
      console.log(response)
    })
    console.log('Book: '+ book.title +' Shelf: ' + newShelf );
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select value={this.state.currentShelf} onChange={(event) => this.updateShelf(book, event.target.value)}>
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
