import React from 'react';
import PropTypes from 'prop-types';
import './ShotItem.css'

const ShopItem = (props) => {
  const {item} = props
  return (
    <div className="ShopItem">
        <img src={item.img} alt=""/>
      <div className="ShopItem__name">{item.name}</div>
      <div className="ShopItem__color">{item.color}</div>
      <div className="ShopItem__price">${item.price}</div>
      <button className="ShopItem__button">ADD TO CARD</button>
    </div>
  );
};

ShopItem.propTypes = {
  item: PropTypes.object
};

export default ShopItem