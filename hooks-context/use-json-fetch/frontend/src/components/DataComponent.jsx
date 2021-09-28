import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';

const DataComponent = (props) => {
  const {data, isLoading, error} = useJsonFetch(`${process.env.REACT_APP_DATA_URL}/data`, {});

  return (
    <div>
      {isLoading && <div>...Loading</div>}
      <div>{error && error.message}</div>
      <div>{data && data.status}</div>
    </div>
  );
};

DataComponent.propTypes = {};

export default DataComponent