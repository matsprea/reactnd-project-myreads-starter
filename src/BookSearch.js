import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { useHistory } from 'react-router-dom';

const BookSearch = ({ library, search }) => {
  const [searchText, setSearchText] = useState(search);
  const [booksFounded, setBooksFounded] = useState([]);
  const history = useHistory();

  useEffect(
    () => {
      if (searchText) {
        history.push({
          pathname: '/Search',
          search: `?search=${searchText}`,
        });
        BooksAPI.search(searchText).then((books) => {
          if ('error' in books) books = [];
          setBooksFounded(books);
        });
      } 
    },
    [searchText]
  );

  return (
    <div className="search-books">
      <SearchBar searchText={searchText} updateSearchText={setSearchText} />
      <SearchResults library={library} booksFounded={booksFounded} />
    </div>
  );
};

BookSearch.propTypes = {
  library: PropTypes.array.isRequired,
};

export default BookSearch;
