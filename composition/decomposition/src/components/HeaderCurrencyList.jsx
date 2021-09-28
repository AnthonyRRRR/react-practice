import React from 'react';
import PropTypes from 'prop-types';
import HeaderCurrencyListItem from './HeaderCurrencyListItem';

//Список котировок
const HeaderCurrencyList = ({rate}) => {
  return (
    <ul>
      {rate.map(rateItem => <HeaderCurrencyListItem rateItem={rateItem}/>)}
    </ul>
  );
};

HeaderCurrencyList.propTypes = {
  rate: PropTypes.arrayOf(PropTypes.object)
};

export default HeaderCurrencyList