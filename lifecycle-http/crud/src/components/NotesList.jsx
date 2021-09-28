import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

const NotesList = ({notes, noteCardHandleRemove}) => {
  return (
    <div className="NoteList">
      {notes.map(note =>(
        <NoteCard key={note.id} note={note} noteCardHandleRemove={noteCardHandleRemove}/>
        ))}
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  noteCardHandleRemove: PropTypes.func.isRequired
};

export default NotesList