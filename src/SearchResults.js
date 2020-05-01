import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const SearchResult = ({ booksFounded, changeShelf }) => {

  return <div className="search-books-results">
      <ol className="books-grid">
        {booksFounded.length > 0 &&
          booksFounded.map((book) => (
            <Book
              key={book.id}
              book={book}
              changeShelf={changeShelf}
            />
          ))}
      </ol>
    </div>;
};

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  booksFounded: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default SearchResult;
