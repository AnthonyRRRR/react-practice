import React from 'react';
import PropTypes from 'prop-types';

//Виджет: карта Германии + расписание
const GermanyWidget = ({germanyMap, schedule}) => {
  return (
    <>
      <h4><a href={germanyMap.link}>{germanyMap.title}</a></h4>
      <a href={schedule.link}>{schedule.title}</a>
    </>
  );
};

GermanyWidget.propTypes = {
  germanyMap: PropTypes.object,
  schedule: PropTypes.object
};

export default GermanyWidget