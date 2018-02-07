import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    ckey: PropTypes.string.isRequired
  }

  render() {
    const { category, ckey } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
