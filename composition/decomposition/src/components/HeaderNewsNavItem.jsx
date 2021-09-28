import React from 'react';
import PropTypes from 'prop-types';

const HeaderNewsNavItem = ({ title, link }) => {
  return (
    <>
      <li><a href={link}>{title}</a></li>
    </>
  );
};

HeaderNewsNavItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string
};

export default HeaderNewsNavItem