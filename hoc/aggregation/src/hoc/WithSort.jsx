import React from 'react';

export function withSort(Component) {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName || Component.name || 'Component';
      return `WithSort(${ name })`;
    }
    
    sort() {
      const { list } = this.props;
      return list
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => {
          const date = new Date(item.date);
          item['month'] = date.toLocaleString('en-EN', { month: 'short' });
          item['year'] = date.getFullYear();
          if (Component.name === 'MonthTable') {
            const { month, amount } = item;
            return { month, amount }
          } else if (Component.name === 'YearTable') {
            const { year, amount } = item;
            return { year, amount }
          } else {
            const { date, amount } = item;
            return { date, amount }
          }
        })
    }

    render() {
      return <Component { ...this.props } list={ this.sort() }/>
    }
  }
}
