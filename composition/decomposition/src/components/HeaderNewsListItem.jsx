import React from 'react';
import PropTypes from 'prop-types';

const HeaderNewsListItem = ({ newsItem }) => {
  return (
    <li>
      <img src={ newsItem.icon }/>
      <a href={ newsItem.link }>
        { newsItem.title }
      </a>
    </li>
  );
};

HeaderNewsListItem.propTypes = {
  newsItem: PropTypes.object
};

export default HeaderNewsListItem