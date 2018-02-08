import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { categories, books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map((category) => (
              <div className="bookshelf" key={category.key}>
                <Bookshelf
                  ckey={category.key}
                  category={category.value}
                  books={books}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
