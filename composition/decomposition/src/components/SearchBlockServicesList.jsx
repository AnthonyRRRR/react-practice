import React from 'react';
import PropTypes from 'prop-types';
import SearchBlockServicesListItem from './SearchBlockServicesListItem';

//список сервисов
const SearchBlockServicesList = ({services}) => {
  return (
    <ul>
      {services.map(service => <SearchBlockServicesListItem service={service}/>)}
    </ul>
  );
};

SearchBlockServicesList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object)
};

export default SearchBlockServicesList