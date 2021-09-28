import React from 'react';
import PropTypes from 'prop-types';

//рекламный баннер
const AdBlock = ({adBanner}) => {
  return (
    <iframe src={adBanner.link} style={{width: 700}} />
  );
};

AdBlock.propTypes = {
  adBanner: PropTypes.object
};

export default AdBlock