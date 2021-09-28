import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};

Video.propTypes = {};

export default Video