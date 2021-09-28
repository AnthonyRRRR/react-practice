import React from 'react';
import PropTypes from 'prop-types';

const TvProgramItem = ({programItem}) => {
  return (
    <li>
      <p>{programItem.time} {programItem.programName}</p>
      <a href={programItem.link}>{programItem.tvChannel}</a>
    </li>
  );
};

TvProgramItem.propTypes = {
  programItem: PropTypes.object
};

export default TvProgramItem