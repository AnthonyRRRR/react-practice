import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServices, removeService, removeServiceApi } from '../actions/actionCreators';
import PropTypes from 'prop-types';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';
import { Link } from 'react-router-dom';

const ServiceList = (props) => {
  const { items, loading, error } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServices(dispatch)
  }, [dispatch])

  const handleRemove = id => {
    removeServiceApi(dispatch, id)
  };

  if (loading) {
    return <Loader/>
  }

  if(error) {
    return <ErrorAlert>{error}</ErrorAlert>
  }

  return (
    <>
      <ul>
        { items.map(item =>
          <li key={ item.id }>
            { item.name } { item.price }
            <button
              onClick={ () => handleRemove(item.id) }
              className="btn btn-primary"
              type="button"
            >
              X
            </button>
            <Link to={ `/services/${ item.id }` } className="btn btn-success" aria-current="page">Edit</Link>
          </li>) }
      </ul>
    </>
  );
};

ServiceList.propTypes = {};

export default ServiceList