import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Details = ({ info }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    fetch(`${ process.env.REACT_APP_LIST_URL }/${ info.id }.json `)
      .then(res => res.json())
      .then(user => setUser(user))
      .then(() => setLoading(false))
  }, [info.id]);

  return (
    <div className="Details-container">
      { isLoading ? <div>...Загрузка</div> :
        <div>
          <img src={ user.avatar } alt=""/>
          <h3>{ user.name }</h3>
          <p>City: { user.details.city }</p>
          <p>Company: { user.details.company }</p>
          <p>Position: { user.details.position }</p>
        </div>
      }
    </div>
  )
};
Details.propTypes = {
  info: PropTypes.object
};

export default Details