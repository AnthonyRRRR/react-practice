import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';

const VideoList = ({ list }) => {
  return list.map(item => <Video url={ item.url } date={ item.date }/>)
};

VideoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default VideoList