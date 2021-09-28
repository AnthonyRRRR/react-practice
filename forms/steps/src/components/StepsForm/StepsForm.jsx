import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './StepsForm.css'

const StepsForm = ({ handleSubmit, form, dateOnChange, distanceOnChange }) => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div className="StepsForm-container">
          <div className="StepsForm__input-container">
            <label htmlFor="date">
              Дата (ДД.ММ.ГГ)
              <input
                className="StepsForm__input"
                type="date"
                name="date"
                value={ form.date }
                onChange={ dateOnChange }
              />
            </label>
          </div>
          <div className="StepsForm__input-container">
            <label>
              Пройдено км
              <input
                className="StepsForm__input"
                type="number"
                name="distance"
                value={ form.distance }
                onChange={ distanceOnChange }
              />
            </label>
          </div>
          <div className="StepsForm__button-container">
            <button className="StepsForm__button" onSubmit={ handleSubmit }>ок</button>
          </div>
        </div>
      </form>
    </div>
  );
};

StepsForm.propTypes = {
  handleSubmit: PropTypes.func,
  form: PropTypes.object,
  dateOnChange: PropTypes.func,
  distanceOnChange: PropTypes.func,
};

export default StepsForm