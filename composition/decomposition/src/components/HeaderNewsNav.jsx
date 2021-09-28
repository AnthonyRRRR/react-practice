import React from 'react';
import PropTypes from 'prop-types';
import HeaderNewsNavItem from './HeaderNewsNavItem';

// Навигация по новостям + сегодняшняя дата
const HeaderNewsNav = ({ newsNavigationItems, date}) => {
  return (
    <>
      <ul>
        { newsNavigationItems.map(navItem => <HeaderNewsNavItem key={navItem.id} title={ navItem.title } link={ navItem.link }/>) }
      </ul>
      <span>{date}</span>
    </>
  );
};

HeaderNewsNav.propTypes = {
  newsNavigationItems: PropTypes.arrayOf(PropTypes.object),
  date: PropTypes.string
};

export default HeaderNewsNav