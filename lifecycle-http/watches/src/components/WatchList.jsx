import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import 'moment-timezone';
import WatchItem from './WatchItem';

const WatchList = ({ watches, watchItemHandleRemove }) => {
  return (
    <div className="WatchList-container">
      { watches.map(watch =>
        <WatchItem
        timezone={ watch.timezone }
        cityname={ watch.cityname }
        id={ watch.id }
        key={ watch.id }
        watchItemHandleRemove={watchItemHandleRemove}
      />
      ) }
    </div>
  );
};

WatchList.propTypes = {
  watches: PropTypes.arrayOf(PropTypes.object),
  watchItemHandleRemove: PropTypes.func.isRequired
};

export default WatchList