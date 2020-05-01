import React from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

const Book = ({ book, changeShelf }) => {

  const changeBookShelf = (shelf) => {
    changeShelf(book, shelf);
  };

  return <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }} />
          <ShelfChanger currentShelf={book.shelf} changeBookShelf={changeBookShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(', ') : 'Unknown Author'}
        </div>
      </div>
    </li>;
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Book;
