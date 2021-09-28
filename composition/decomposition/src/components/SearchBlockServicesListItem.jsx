import React from 'react';
import PropTypes from 'prop-types';

//сервис
const SearchBlockServicesListItem = ({service}) => {
  return (
    <li>
      <a href={service.link}>{service.title}</a>
    </li>
  );
};

SearchBlockServicesListItem.propTypes = {
  service: PropTypes.object
};

export default SearchBlockServicesListItem