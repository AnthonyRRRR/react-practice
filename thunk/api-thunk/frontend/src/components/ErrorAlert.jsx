import React from 'react';
import PropTypes from 'prop-types';

const ErrorAlert = (props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
};

ErrorAlert.propTypes = {};

export default ErrorAlert