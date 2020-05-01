import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import shelves from './shelves';
import Shelf from './Shelf';

const Library = ({ books, changeShelf }) => {
  
  const booksOnAShelf = (shelf) => {
    return books.filter((book) => book.shelf === shelf.id);
  };

  return <>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.id}
              name={shelf.name}
              books={booksOnAShelf(shelf)}
              changeShelf={changeShelf}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">
          <button>Add a Book</button>
        </Link>
      </div>
    </>;
};

Library.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Library;
