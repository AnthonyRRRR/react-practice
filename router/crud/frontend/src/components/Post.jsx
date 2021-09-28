import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import PostsContext from '../context/PostsContext';

const Post = ({ match }) => {
  const { input, setInput, onChange, sendPostApi, deletePostApi } = useContext(PostsContext);
  const id = Number(match.params.id);
  const { response } = useFetch(`${ process.env.REACT_APP_POSTS_URL }/${ id }`, {});
  const [edit, setEdit] = useState(false);
  let history = useHistory();

  if (!response) {
    return null
  }

  const date = new Date(response.created).toISOString();
  const onEditMode = () => {
    setEdit(true);
    setInput(prevState => ({ ...prevState, content: response.content }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const modifiedPost = { id: response.id, content: input.content };
    sendPostApi(modifiedPost);
    history.push(`/`)
  };

  return (
    <>
      { !edit ? (
        <div className="post">
          <p>Name Name</p>
          <div className="post-img_container">
            <img
              className="post-img"
              src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
            />
          </div>
          <div>
            <p>
              { response.content }
            </p>
            <p>
              { date }
            </p>
          </div>
          <div>
            <button
              onClick={ () => {
                deletePostApi(id)
              } }
            >Удалить
            </button>
          </div>
          <div>
            <button onClick={ onEditMode }>
              Изменить
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={ handleSubmit }>
          <div className="NewPostForm">
            <div className="NewPostForm__btn">
              <Link to="/">X</Link>
            </div>
            <div className="NewPost-card">
              <input
                onChange={ onChange }
                type="text"
                className="NewPostForm__input"
                value={ input.content }
                name="content"
              />
              <div>
                <button className="NewPost__btn" type="submit" onSubmit={ handleSubmit }>
                  Опубликовать
                </button>
              </div>
            </div>
          </div>
        </form>
      ) }
    </>
  );
};

Post.propTypes = {};

export default Post

