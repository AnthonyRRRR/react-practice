import React from 'react';
import PropTypes from 'prop-types';

const VisitedItem = ({visit}) => {
  return (
    <li>
      <a href={visit.link}>{visit.title}</a> - <p>{visit.subtitle}</p>
    </li>
  );
};

VisitedItem.propTypes = {
  visit: PropTypes.object
};

export default VisitedItem