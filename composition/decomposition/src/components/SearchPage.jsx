import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import SearchBlock from './SearchBlock';
import InformationBlock from './InformationBlock';

//Главная страница
const SearchPage = (props) => {
  return (
    <>
      <Header/>
      <SearchBlock/>
      <InformationBlock/>
    </>
  );
};

SearchPage.propTypes = {};

export default SearchPage