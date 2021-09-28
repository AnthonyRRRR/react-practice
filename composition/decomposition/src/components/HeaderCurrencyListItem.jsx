import React from 'react';
import PropTypes from 'prop-types';

const HeaderCurrencyListItem = ({rateItem}) => {
  return (
    <li>
      {rateItem.currency}{rateItem.value}{rateItem.stocks}
    </li>
  );
};

HeaderCurrencyListItem.propTypes = {
  rateItem: PropTypes.object
};

export default HeaderCurrencyListItem