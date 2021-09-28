import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addService, changeServiceField } from '../actions/actionCreators';
import PropTypes from 'prop-types';
import ErrorAlert from './ErrorAlert';

const ServiceAdd = (props) => {
  const { item, loading, error } = useSelector(state => state.serviceAdd);

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addService(dispatch, item.name, item.price, item.id);
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input name='name' onChange={ handleChange } value={ item.name }/>
      <input name='price' onChange={ handleChange } value={ item.price }/>
      <button
        className="btn btn-primary"
        type='submit'
        disabled={ loading }
      >
        Save
      </button>
      { error && <ErrorAlert>Произошла ошибка!</ErrorAlert> }
    </form>
  );

};

ServiceAdd.propTypes = {};

export default ServiceAdd