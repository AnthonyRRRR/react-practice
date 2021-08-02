import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownList from '../DropdownList/DropdownList';

const Dropdown = ({ dropdownItems }) => {
  const styles = {
    div: {
      textAlign: 'center',
      padding: '50px'
    },
  };

  const [items, setItems] = useState(false);

  return (
    <div className="wrapper" style={ styles.div }>
      <button
        className="Dropdown__btn"
        onClick={ () => setItems(items => items !== true) }
      >
        Account Settings
      </button>
      { items === true ? <DropdownList dropdownItems={ dropdownItems }/> : null }
    </div>

  );
};

Dropdown.propTypes = {
  dropdownItems: PropTypes.arrayOf(PropTypes.string)
};

export default Dropdown