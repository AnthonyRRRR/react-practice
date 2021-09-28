import React from 'react';
import PropTypes from 'prop-types';
import TvProgramItem from './TvProgramItem';

const TvProgramWidget = ({tvProgramTitle, tvProgram}) => {
  return (
    <>
      <h4><a href={tvProgramTitle.link}>{tvProgramTitle.title}</a></h4>
      <button>Эфир</button>
      <ul>
        {tvProgram.map(programItem => <TvProgramItem programItem={programItem}/>)}
      </ul>
    </>
  );
};

TvProgramWidget.propTypes = {
  tvProgramTitle: PropTypes.object,
  tvProgram: PropTypes.arrayOf(PropTypes.object)
};

export default TvProgramWidget