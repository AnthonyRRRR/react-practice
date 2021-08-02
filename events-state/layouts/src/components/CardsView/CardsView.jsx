import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './ShopCard/ShopCard';
import './CardsView.css'

const CardsView = (props) => {
  const {cards} = props;

  return (
    <div className="CardsView">
      {cards.map((card, index) =><ShopCard key={index} card={card}/> )}
    </div>
  );
};

CardsView.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};

export default CardsView