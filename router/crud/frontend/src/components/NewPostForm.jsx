import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import PostsContext from '../context/PostsContext';

const NewPostForm = (props) => {
  const { input, setInput, onChange, sendPostApi } = useContext(PostsContext);
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = { id: 0, content: input.content };
    setInput({ content: '' });
    sendPostApi(newPost);
    history.push('/')
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="NewPostForm">
        <div className="NewPostForm__btn">
          <Link to="/">X</Link>
        </div>
        <div className="NewPost-card">
          <input
            type="text"
            className="NewPostForm__input"
            onChange={ onChange }
            value={ input.content }
            name="content"
          />
          <div>
            <button className="NewPost__btn" type="submit">
              Опубликовать
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

NewPostForm.propTypes = {};

export default NewPostForm