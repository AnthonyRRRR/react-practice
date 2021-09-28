import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchServicesRequest } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import ErrorAlert from './ErrorAlert';

const ServiceList = (props) => {
  const { items, error, loading } = useSelector(state => state.serviceList);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchServicesRequest())
  }, []);

  if (loading) {
    return <Loader/>
  }

  if (error) {
    return <ErrorAlert onClick={() => dispatch(fetchServicesRequest())}/>
  }

  return (
    <div>
      <ul className="list-group">
        { items.map(item =>
          <li className="list-group-item" key={ item.id }>
            <div>
              <Link className="link-dark" to={ `/${ item.id }/details` }>
                { item.name } { item.price }
              </Link>
            </div>
          </li>) }
      </ul>
    </div>
  );
};

ServiceList.propTypes = {};

export default ServiceList