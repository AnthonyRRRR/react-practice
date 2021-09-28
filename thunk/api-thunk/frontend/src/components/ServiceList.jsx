import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, fetchServices, removeServiceApi } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';

function ServiceList(props) {
  const { items, loading, error } = useSelector(state => state.serviceList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(removeServiceApi(id))
  }

  if (loading) {
    return <Loader/>;
  }

  if (error) {
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
}

export default ServiceList
