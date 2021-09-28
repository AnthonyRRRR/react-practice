import React from 'react';
import PropTypes from 'prop-types';

const LiveItemWidget = ({liveItem}) => {
  return (
    <li>
      <img src={liveItem.img} style={{width: 30}}/>
      <p>{liveItem.title}</p>
      <a href={liveItem.link}>{liveItem.channel}</a>
    </li>
  );
};

LiveItemWidget.propTypes = {
  liveItem: PropTypes.object
};

export default LiveItemWidget