import React from 'react';
import PropTypes from 'prop-types';
import VisitedItem from './VisitedItem';

//Виджет с рекоммендуемыми для посещения сайтами
const VisitedWidget = ({visitedTitle, visited}) => {
  return (
    <>
      <h4><a href={visitedTitle.link}>{visitedTitle.title}</a></h4>
      <ul>
        {visited.map(visit => <VisitedItem visit={visit}/>)}
      </ul>
    </>
  );
};

VisitedWidget.propTypes = {
  visitedTitle: PropTypes.object,
  visited: PropTypes.arrayOf(PropTypes.object)
};

export default VisitedWidget