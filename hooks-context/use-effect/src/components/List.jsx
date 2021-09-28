import React from 'react';
import PropTypes from 'prop-types';

const List = ({ list, getInfo }) => {
  return (
    <div className="List-container">
      <ul className="List-list">
        { list.map(listItem =>
          <li
            className="List-listItem"
            key={ listItem.id }
            onClick={ () => getInfo(listItem) }
          >
            { listItem.name }
          </li>
        ) }
      </ul>
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  getInfo: PropTypes.func.isRequired
};

export default List