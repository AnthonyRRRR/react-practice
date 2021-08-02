import React from 'react';
import PropTypes from 'prop-types';
import './ListView.css'
import ShopItem from './ShopItem/ShopItem';

const ListView = (props) => {
  const {items} = props;

  return (
    <div className="ListView">
      {items.map((item, index) => <ShopItem  key={index} item={item}/>)}
    </div>
  );
};

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ListView