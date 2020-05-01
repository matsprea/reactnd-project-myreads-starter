import React from 'react';
import PropTypes from 'prop-types';
import shelves from './shelves';

const ShelfChanger = ({ currentShelf, changeBookShelf }) => {
  const moveBook = (event) => {
    changeBookShelf(event.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={currentShelf} onChange={moveBook}>
        <option value="move" disabled>
          Move to:
        </option>
        {shelves.map((shelf) => (
          <option key={shelf.id} value={shelf.id}>
            {shelf.name}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.ChangeShelf = {
  currentShelf: PropTypes.string.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default ShelfChanger;
