import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({isExpanded, children}) => {
  return (
    <p>
      {isExpanded && children}
    </p>
  );
};

Paragraph.propTypes = {
  isExpanded: PropTypes.bool,
  children: PropTypes.string
};

export default Paragraph