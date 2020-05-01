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

  const removeBook = ({ id }) => {
    const newBooks = books.filter((b) => b.id !== id);
    setBooks(newBooks);
  };

  const updatedBook = ({ id }, shelf) => {
    const newBooks = books.map((b) => {
      if (b.id === id) {
        b.shelf = shelf;
      }
      return b;
    });
    setBooks(newBooks);
  };

  const addBook = (book, shelf) => {
    const newBooks = [...books, { ...book, shelf: shelf }];
    setBooks(newBooks);
  };

  const findBook = ({ id }) => {
    const bookFound = books.find((b) => b.id === id);
    return bookFound;
  };

  const changeShelf = (book, shelf) => {
    if (shelf === 'none') {
      removeBook(book);
    } else {
      if (findBook(book)) {
        updatedBook(book, shelf);
      } else {
        addBook(book, shelf);
      }
    }
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
