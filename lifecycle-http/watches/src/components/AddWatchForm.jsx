import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';


const AddWatchForm = ({onChange, handleSubmit, form}) => {
  return (
    <form onSubmit={ handleSubmit }>
      <div className="AddWatchForm-container">
        <div className="AddWatchForm__input-container">
          <label className="AddWatchForm__label">
            Название
            <input
              className="AddWatchForm__input"
              type="text"
              name="cityname"
              id="cityname"
              onChange={ onChange }
              value={ form.cityname }
            />
          </label>
        </div>
        <div className="AddWatchForm__input-container">
          <label className="AddWatchForm__label">
            Временная зона
            <input
              className="AddWatchForm__input"
              type="text"
              name="timezone"
              id="timezone"
              onChange={ onChange }
              value={ form.timezone }
            />
          </label>
        </div>
        <div className="AddWatchForm__button-container">
          <button
            className="AddWatchForm__button"
            type="submit"
            onSubmit={ handleSubmit }
          >
            Добавить
          </button>
        </div>
      </div>
    </form>
  );
};

AddWatchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.object
};

export default AddWatchForm