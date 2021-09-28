import React from 'react';
import PropTypes from 'prop-types';

const HeaderWidget = ({ widget }) => {
  return (
    <div>
      <img src={ widget.img } style={ { width: 100 } }/>
      <div>
        <a href={ widget.link }>Работа над ошибками</a>
        <p>Смотрите и запоминайте</p>
      </div>
    </div>
  );
};

HeaderWidget.propTypes = {
  widget: PropTypes.object
};

export default HeaderWidget