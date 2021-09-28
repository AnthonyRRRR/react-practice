import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchServicesRequest } from '../actions/actionCreators';

const ErrorAlert = ({ onClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="alert alert-danger" role="alert">
      <p>Произошла ошибка!</p>
      <div>
        <button onClick={ onClick }>Повторить запрос</button>
      </div>
    </div>
  );
};

ErrorAlert.propTypes = {};

export default ErrorAlert