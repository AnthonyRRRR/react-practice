import React from 'react';
import PropTypes from 'prop-types';

const NewNoteForm = ({onChange, handleSubmit, content}) => {
  return (
    <div className="NewNoteForm-container">
      <p>New Note</p>
      <form onSubmit={ handleSubmit }>
        <input
          className="NewNoteForm__input"
          onChange={ onChange }
          type="text"
          name="content"
          value={content }
        />
        <button type="submit" onClick={ handleSubmit }>Добавить</button>
      </form>
    </div>
  );
};

NewNoteForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  content: PropTypes.string
};

export default NewNoteForm