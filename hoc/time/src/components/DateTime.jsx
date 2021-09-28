import React from 'react';
import PropTypes from 'prop-types';

const DateTime = ({ date }) => {
  return (
    <p className="date">{ date }</p>
  );
};

DateTime.propTypes = {
  date: PropTypes.string
};

export default DateTime