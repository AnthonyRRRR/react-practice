import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class WatchItem extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.timezoneOffset = Math.abs(this.date.getTimezoneOffset());
    this.state = {
      time: moment().subtract(this.timezoneOffset, 'minutes').add(this.props.timezone, 'hours')
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: moment().subtract(this.timezoneOffset, 'minutes').add(this.props.timezone, 'hours')
    });
  }

  render() {
    return (
      <div className="Watch-container">
        <p>{ this.props.cityname }</p>
        <p>{ this.state.time.format('HH:mm:ss') }</p>
        <div className="Watch__button-container">
        <button className="Watch__button" onClick={() => this.props.watchItemHandleRemove(this.props.id)}>x</button>
        </div>
      </div>
    )
  };
};


WatchItem.propTypes = {};

export default WatchItem