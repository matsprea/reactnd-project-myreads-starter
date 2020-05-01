import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SearchBar = ({ updateSearch }) => {
  const [searchText, setSearchText] = useState('');

  const updateSearchText = (event) => {
    setSearchText(event.target.value);
    updateSearch(searchText.trim());
  }

  return <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
          <input type="text" name="search" onChange={updateSearchText} value={searchText} placeholder="Search Books" />
      </div>
    </div>;
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  updateSearch: PropTypes.func.isRequired,
};
export default SearchBar;
