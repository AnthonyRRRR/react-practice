import React from 'react';
import PropTypes from 'prop-types';
import LiveItemWidget from './LiveItemWidget';

const LiveWidget = ({liveTitle, live}) => {
  return (
    <div>
      <h4><a href={liveTitle.link}>{liveTitle.title}</a></h4>
      <ul>
        {live.map(liveItem => <LiveItemWidget liveItem={liveItem}/>)}
      </ul>
    </div>
  );
};

LiveWidget.propTypes = {
  liveTitle: PropTypes.object,
  live: PropTypes.arrayOf(PropTypes.object)
};

export default LiveWidget