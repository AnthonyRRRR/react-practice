import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({searchExample}) => {
  return (
    <>
      <input style={{width: 700}}/>
      <button>Найти</button>
      <p>Найдется все. Например, <a href={searchExample.link}>{searchExample.example}</a></p>
    </>
  );
};

SearchInput.propTypes = {
  searchExample: PropTypes.object
};

export default SearchInput