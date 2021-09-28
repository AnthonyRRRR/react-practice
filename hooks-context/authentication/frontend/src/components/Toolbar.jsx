import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../contexts/AuthContext';
import LoginForm from './LoginForm';
import ProfileContent from './ProfileContent';

const Toolbar = (props) => {
  const { profile } = useContext(AuthContext)

  return (
    <Fragment>
      { profile ? <ProfileContent/> : <LoginForm/> }
    </Fragment>
  );
};

Toolbar.propTypes = {};

export default Toolbar