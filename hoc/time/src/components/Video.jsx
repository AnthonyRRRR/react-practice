import React from 'react';
import PropTypes from 'prop-types';
import DateTime from './DateTime';
import { howMachAgo } from '../hoc/DateTimePretty';

const Video = ({ url, date }) => {
  const DateTimePretty = howMachAgo(DateTime);
  return (
    <div className="video">
      <iframe src={ url } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen/>
      <DateTimePretty date={ date }/>
    </div>
  );
};

Video.propTypes = {
  url: PropTypes.string,
  date: PropTypes.string
};

export default Video