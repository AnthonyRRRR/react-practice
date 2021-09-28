import React from 'react';
import PropTypes from 'prop-types';
import NewNoteForm from './NewNoteForm';
import NotesList from './NotesList';
import { nanoid } from 'nanoid';
import Reload from './Reload';

const notesURL = `${process.env.REACT_APP_NOTES_URL}`;
class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      notes: [],
      content: ''
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.noteCardHandleRemove = this.noteCardHandleRemove.bind(this);
    this.loadNotes = this.loadNotes.bind(this);
  }

  onChange(event) {
    this.setState({ content: event.target.value })
  };


  handleSubmit(event) {
    event.preventDefault();
    const newNote = {
      id: nanoid(),
      content: this.state.content
    };

    this.setState({ content: '' });
    fetch(process.env.REACT_APP_NOTES_URL, {
      method: 'POST',
      body: JSON.stringify(newNote),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.loadNotes()
    })
  };

  noteCardHandleRemove(id) {
    fetch(`${notesURL}/${ id }`, {
      method: 'DELETE',
    })
      .then(res => this.loadNotes())
      .then(res => console.log(res))
  };


  loadNotes() {
    fetch(process.env.REACT_APP_NOTES_URL)
      .then(res => res.json())
      .then(notes => {
          this.setState({
            isLoaded: true,
            notes: notes
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  componentDidMount() {
    this.loadNotes()
  }


  render() {
    const { error, isLoaded, notes } = this.state;
    if (error) {
      return <div>Ошибка: { error.message }</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div>
          <NotesList notes={ this.state.notes } noteCardHandleRemove={ this.noteCardHandleRemove }/>
          <NewNoteForm onChange={ this.onChange } handleSubmit={ this.handleSubmit } content={ this.state.content }/>
          <Reload loadNotes={this.loadNotes}/>
        </div>
      )
    }
  }
}

Notes.propTypes = {};

export default Notes