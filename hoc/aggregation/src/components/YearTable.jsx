import React from 'react';
import PropTypes from 'prop-types';

const YearTable = (props) => {
  console.log('YearTable', props);

  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map(item => (
          <tr>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

YearTable.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

export default YearTable