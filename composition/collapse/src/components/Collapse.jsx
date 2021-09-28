import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Paragraph from './Paragraph';

const Collapse = ({ collapsedLabel, expandedLabel, isDefaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(isDefaultExpanded);
  const toggle = () => {
    setIsExpanded(prevState => !prevState)
  };

  return (
    <>
      <Paragraph isExpanded={ isExpanded }>
        Альфа-Банк, основанный в 1990 году, является универсальным банком,
        осуществляющим все основные виды банковских операций, представленных
        на рынке финансовых услуг, включая обслуживание частных и корпоративных
        клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.
      </Paragraph>
      <label style={ { cursor: 'pointer' } } onClick={ toggle }>{ isExpanded ? expandedLabel : collapsedLabel }</label>
    </>
  );
};

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string
};

export default Collapse