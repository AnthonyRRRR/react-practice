import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';
import useStorage from '../hooks/useStorage';

const AuthProvider = (props) => {
  const [token, setToken] = useStorage(localStorage, 'token');
  const [profile, setProfile] = useStorage(localStorage, 'profile', true);
  const [error, setError] = useState(null);

  const handleLogin = async (login, password) => {
    try {
      const responseAuth = await fetch(process.env.REACT_APP_AUTH_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });
      if (!responseAuth.ok) {
        throw new Error(responseAuth.statusText)
      }

      const { token } = await responseAuth.json();

      console.log(token)
      setToken(token)

      const responseProfile = await fetch(process.env.REACT_APP_PROFILE_URL, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${ token }` }
      })
      if (!responseProfile.ok) {
        throw new Error(responseProfile.statusText)
      }

      const profile = await responseProfile.json();
      setProfile(profile)

    } catch (error) {
      console.log(error)
      setError(error)
    }
  };

  const handleLogout = () => {
    setToken(null);
    setProfile(null)
  };

  return (
    <div>
      <AuthContext.Provider value={ { handleLogin, handleLogout, token, profile, error, setError } }>
        { props.children }
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider