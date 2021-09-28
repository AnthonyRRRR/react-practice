import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.src}/>
      <>
      {props.children}
      </>
    </div>
  );
};

Card.propTypes = {};

export default Card