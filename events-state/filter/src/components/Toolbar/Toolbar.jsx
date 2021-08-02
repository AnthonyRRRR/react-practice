import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css'

const Toolbar = ({ filters, onSelectFilter, selectedFilter }) => {
  return (
    <div className="Toolbar">
      { filters.map((filter) => (
        <button
          className={`Toolbar-button ${filter === selectedFilter && 'Toolbar-button_active'}`}
          onClick={ () => onSelectFilter(filter) }
          key={ filter }
        >
          { filter }
        </button>
      )) }
    </div>
  );
};

Toolbar.propTypes = {
  filter: PropTypes.arrayOf(PropTypes.string),
  selectedFilter: PropTypes.string,
  onSelectFilter: PropTypes.func
};

export default Toolbar