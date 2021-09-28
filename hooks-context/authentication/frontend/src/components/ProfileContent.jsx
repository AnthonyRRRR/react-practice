import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';

const ProfileContent = (props) => {
  const [content, setContent] = useState(null)
  const { handleLogout, token, profile, setError } = useContext(AuthContext);

  useEffect(() => {
    fetch(process.env.REACT_APP_CONTENT_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ token }` }
    }).then(res => res.json())
      .then(content => setContent(content))
      .catch(error => {
        if(error.status === 401) {
          setError(error)
          handleLogout()
        }
      })
  }, [])

  return (
    <Fragment>
      <div className="ProfileContent">
        <p>Hello, { profile.name }</p>
        <div>
          <img src={ profile.avatar }/>
        </div>
        <button onClick={ handleLogout } type="button" className="btn btn-danger">Logout</button>
      </div>
      <div className="ProfileContent">
      {
        content && content.map((card) => <div className="card">
          <img src={ card.image } className="card-img-top" alt="/"/>
          <div className="card-body">
            <h4>{ card.title }</h4>
            <p className="card-text">{ card.content }</p>
          </div>
        </div>)
      }
      </div>
    </Fragment>
  );
};

ProfileContent.propTypes = {};

export default ProfileContent