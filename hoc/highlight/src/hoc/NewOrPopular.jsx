import React from 'react';
import PropTypes from 'prop-types';
import New from '../components/New';
import Popular from '../components/Popular';

export function newOrPopular(Component) {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName || Component.name || 'Component';
      return `NewOrPopular(${ name })`;
    }

    render() {
      const { views } = this.props;
      const componentContainer = <Component { ...this.props }/>;
      const NEW_VIEWS = 100;
      const POPULAR_VIEWS = 1000;

      if (views < NEW_VIEWS) {
        return (<New>{ componentContainer }</New>)
      } else if (views > POPULAR_VIEWS) {
        return (<Popular>{ componentContainer }</Popular>)
      } else {
        return componentContainer
      }
    }
  }
}

