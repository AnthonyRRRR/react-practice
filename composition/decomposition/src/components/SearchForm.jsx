import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput';

//форма поиска: лого, инпут, кнопка поиска
const SearchForm = ({logo, searchExample}) => {
  return (
    <form>
      <div>
        <img src={logo.link} style={{width: 200}}/>
      </div>
        <SearchInput searchExample={searchExample}/>
    </form>
  );
};

SearchForm.propTypes = {
  logo: PropTypes.object,
  searchExample: PropTypes.object
};

export default SearchForm