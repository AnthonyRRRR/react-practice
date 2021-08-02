import React, { useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
  ul: {
    listStyleType: 'none',
    margin: '0',
  },
  li: {
    border: 'black 1px solid',
    padding: '10px',
    margin: '10px',
  },
  active: {
    backgroundColor: '#808080',
    border: 'black 1px solid',
    padding: '10px',
    margin: '10px',
  }
};

const DropdownList = ({ dropdownItems }) => {
  const [active, setActive] = useState('');

  const addActiveStyle = (event, li) => {
    setActive(li)
  };

  return (
    <ul style={ styles.ul }>
      { dropdownItems
        .map((li, index) =>
          <li
            key={ index }
            style={ active === li ? styles.active : styles.li }
            onClick={ (event) => addActiveStyle(event.currentTarget, li) }
          >{ li }
          </li>
        ) }
    </ul>
  );
};

DropdownList.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string)
};

export default DropdownList
