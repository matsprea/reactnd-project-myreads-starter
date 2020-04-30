import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = ({ searchText, updateSearchText }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <form>
          <input
            type="text"
            name="search"
            onChange={(event) => updateSearchText(event.target.value.trim())}
            value={searchText}
            placeholder="Search Books"
          />
        </form>
      </div>
    </div>
  );
};

SearchBar.PropTypes = {
  searchText: PropTypes.string,
  updateSearchText: PropTypes.func.isRequired,
};
export default SearchBar;
