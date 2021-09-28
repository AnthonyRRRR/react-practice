import React from 'react';
import PropTypes from 'prop-types';
import HeaderNewsListItem from './HeaderNewsListItem';

//Список новостей
const HeaderNewsList = ({news}) => {
  return (
  <ul>
    {news.map(newsItem => <HeaderNewsListItem key={newsItem.id} newsItem={newsItem}/>)}
  </ul>
  );
};

HeaderNewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object)
};

export default HeaderNewsList