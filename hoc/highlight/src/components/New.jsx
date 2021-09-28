import React from 'react';
import PropTypes from 'prop-types';

const New = (props) => {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};

New.propTypes = {};

export default New