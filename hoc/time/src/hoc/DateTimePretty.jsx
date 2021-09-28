import React from 'react';

const toMinutes = (milliseconds) => {
  return Math.floor(milliseconds / 60000)
};

const toHours = (milliseconds) => {
  return Math.floor(toMinutes(milliseconds) / 60)
};

const toDays = (milliseconds) => {
  return Math.floor(toHours(milliseconds) / 24)
};

export function howMachAgo(Component) {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName || Component.name || 'Component';
      return `HowMachAgo(${ name })`;
    }

    timeCounter() {
      const { date } = this.props;
      const now = new Date();
      const then = new Date(date);
      const diffTime = now - then;

      if (toHours(diffTime) < 1) {
        return `${ toMinutes(diffTime) } минут назад`
      } else if (toHours(diffTime) > 1 && toHours(diffTime) < 24) {
        return `${ toHours(diffTime) } часов назад`
      } else {
        return `${ toDays(diffTime) } дней назад`
      }
    }

    render() {
      return <Component { ...this.props } date={ this.timeCounter() }/>;
    }
  }
}

