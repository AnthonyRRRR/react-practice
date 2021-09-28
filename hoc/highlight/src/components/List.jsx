import React from 'react';
import PropTypes from 'prop-types';
import Video from './Video';
import Article from './Article';
import { newOrPopular } from '../hoc/NewOrPopular';

const List = (props) => {
  const NewOrPopularArticle = newOrPopular(Article);
  const NewOrPopularVideo = newOrPopular(Video)
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <NewOrPopularVideo {...item} />
        );

      case 'article':
        return (
          <NewOrPopularArticle {...item}/>
        );
    }
  });
};

List.propTypes = {};

export default List