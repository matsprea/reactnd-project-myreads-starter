import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as queryString from 'query-string';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';

const BooksApp = () => {
  const [shelves, setShelves] = useState([]);
  const [library, setLibrary] = useState([]);

  const loadLibraryOnce = () => {
    BooksAPI.getAll().then((books) => {
      setLibrary(books);
    });
  };

  useEffect(loadLibraryOnce, []);

  return (
    <div className="app">
      <Route
        path="/Search"
        render={({ location }) => {
          const { search } = queryString.parse(location.search);
          return <BookSearch library={library} search={search} />;
        }}
      />
    </div>
  );
};

export default BooksApp;
