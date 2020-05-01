import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const BookSearch = ({ books, changeShelf }) => {
  const [booksFounded, setBooksFounded] = useState([]);

  const getBookFromSelf = (book) =>
    books.find((b) => b.id === book.id) || { ...book, shelf: 'none' };

  const updateSearch = (searchText) => {
    if (!!searchText) {
      BooksAPI.search(searchText).then((booksResult) => {
        if ('error' in booksResult) booksResult = [];
        setBooksFounded(booksResult.map((book) => getBookFromSelf(book)));
      });
    } else {
      setBooksFounded([]);
    }
  };

  const changeShelfAndResults = (book, shelf) => {
    const newbooksFounded = booksFounded.map((b) => {
      if (b.id === book.id) {
        b.shelf = shelf;
      }
      return b;
    });

    setBooksFounded(newbooksFounded);
    changeShelf(book, shelf);
  };

  return <div className="search-books">
      <SearchBar updateSearch={updateSearch} />
      <SearchResults books={books} booksFounded={booksFounded} changeShelf={changeShelfAndResults} />
    </div>;
};

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default BookSearch;
