import React from 'react';
import PropTypes from 'prop-types';
import './ShopCard.css'

const ShopCard = (props) => {
  const { card } = props;

  return (
    <div className="ShopCard">
      <div className="ShopCard__name">{ card.name }</div>
      <div className="ShopCard__color">{ card.color }</div>
      <div className="ShopCard__img-box">
        <img className="ShopCard__img" src={ card.img } alt=""/>
      </div>
      <div className="ShopCard__bottom">
      <div className="ShopCard__price">${ card.price }</div>
      <button className="ShopCard__button">ADD TO CARD</button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  card: PropTypes.object
};

export default ShopCard