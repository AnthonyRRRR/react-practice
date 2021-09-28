import React from 'react';
import PropTypes from 'prop-types';

const NoteCard = ({ note, noteCardHandleRemove }) => {
  return (
    <div className="NoteCard">
      { note.content }
      <div className="NoteCard__btn-container">
        <button onClick={() => noteCardHandleRemove(note.id)}>x</button>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  noteCardHandleRemove: PropTypes.func.isRequired
};

export default NoteCard