import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';
import Library from './Library';
import Title from './Title';

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const loadLibraryOnce = () => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  };

  useEffect(loadLibraryOnce, []);

  const changeShelf = (book, shelf) => {
    const newBook = {...book, shelf: shelf};
    const newBooks = books.filter((b) => (b.id !== book.id)).concat([newBook]);

    BooksAPI.update(book, shelf).then(() => {
      setBooks(newBooks);
    });
  };

  return (
    <div className="app">
      <Title />
      <Route
        path="/search"
        render={() => {
          return <BookSearch books={books} changeShelf={changeShelf} />;
        }}
      />
      <Route
        exact
        path="/"
        render={() => {
          return <Library books={books} changeShelf={changeShelf} />;
        }}
      />
    </div>
  );
};

export default BooksApp;
