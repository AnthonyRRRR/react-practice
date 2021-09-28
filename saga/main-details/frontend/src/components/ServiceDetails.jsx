import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceDetailsRequest, fetchServicesRequest } from '../actions/actionCreators';
// import Loader from './Loader';
// import ErrorAlert from './ErrorAlert';

const ServiceDetails = ({ match }) => {
  const id = Number(match.params.id);
  const { item, error, loading } = useSelector(state => state.serviceDetails);
  const dispatch = useDispatch();
  console.log(item)

  useEffect(() => {
    dispatch(fetchServiceDetailsRequest(id))
  }, []);

  // if(loading) {
  //   return <Loader/>
  // }
  //
  // if(error) {
  //   return <ErrorAlert/>
  // }

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">{item.name}</li>
        <li className="list-group-item">{item.price}</li>
        <li className="list-group-item">{item.content}</li>
      </ul>
    </div>
  );
};

ServiceDetails.propTypes = {};

export default ServiceDetails