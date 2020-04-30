import React from 'react';
import PropTypes from 'prop-types';

const BookSearch = ({ booksFounded }) => {
  return (
    <div className="search-books-results">
      {booksFounded && (
        <ol className="books-grid">
          {booksFounded.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

BookSearch.PropTypes = {
  library: PropTypes.array.isRequired,
  booksFounded: PropTypes.array.isRequired,
};

export default BookSearch;
