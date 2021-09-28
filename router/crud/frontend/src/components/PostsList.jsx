import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const PostsList = (props) => {
  const { response, isLoading, error } = useFetch(process.env.REACT_APP_POSTS_URL, {});

  return (
    <div className="MainPage-container">
      <div className="MainPage__btn">
        <Link exact="true" to="/posts/new">Создать пост</Link>
      </div>
      { isLoading && <div>...Загрузка</div> }
      { response && response.map(post =>
        <Link to={ `/posts/${ post.id }` } key={ post.id }>
          <div className="post">
            <p>Name Name</p>
            <div className="post-img_container">
              <img
                className="post-img"
                src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
              />
            </div>
            <p>{ post.content }</p>
            <p>{ new Date(post.created).toISOString() }</p>
          </div>
        </Link>) }
    </div>
  );
};

PostsList.propTypes = {};

export default PostsList