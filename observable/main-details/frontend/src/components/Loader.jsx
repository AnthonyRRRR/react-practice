import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  return (
    <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

Loader.propTypes = {};

export default Loader